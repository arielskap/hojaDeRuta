import React, { useState, useEffect, useRef } from 'react';
import { Prompt, useLocation } from 'react-router-dom';
import HeaderHr from './HeaderHr';
import BodyHr from './BodyHr';
import FooterHr from './FooterHr';
import SubmitHr from './SubmitHr';
import BgDark from '../../BgDark';
import LoaderEllipsis from '../../loaders/LoaderEllipsis';
import hrData from '../../../hrData';
import useNumerado from '../../../hooks/useNumerado';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Hr = () => {
  const { esNumerado, setEsNumerado } = useNumerado();
  const query = useQuery();
  const isMounted = useRef(true);
  const controller = useRef(new AbortController());
  const [sendData, setSendData] = useState({
    response: { result: '',
      title: '',
      list: [],
    },
    loading: false,
    error: '',
  });
  const [responseHr, setResponseHr] = useState({
    body: {},
    loading: false,
    error: '',
  });

  const getHr = () => {
    const { signal } = controller.current;
    setResponseHr({ ...responseHr, loading: true });
    const headers = { method: 'GET',
      signal,
      headers: {
        'authorization': localStorage.getItem('authorization'),
        'Content-Type': 'application/json',
      },
    };
    fetch(`http://www.dynamicdoc.com.ar/hoja_de_ruta/bobina/read/${query.get('hr')}`, headers)
      .then((response) => {
        if (isMounted.current) {
          return response.json();
        }
      })
      .catch((error) => {
        if (isMounted.current) {
          console.log(`error: ${error}`);
          setResponseHr({
            ...responseHr,
            loading: false,
            error,
          });
          return false;
        }
      })
      .then((response) => {
        if (response) {
          console.log(response);
          setResponseHr({
            ...responseHr,
            body: response.body,
            loading: false,
            error: '',
          });
          hrData('bobinas').setData(response.body);
        }
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { signal } = controller.current;
    setSendData({ ...sendData, loading: true });
    const data = hrData('bobinas').getData();
    const headers = { method: 'POST',
      signal,
      body: JSON.stringify({
        obj_cabecera: data.header,
        obj_bobina: data.body,
        obj_pie: data.footer,
        obj_hoja: data.hoja,
        obj_colores: data.colores,
      }),
      headers: {
        'authorization': localStorage.getItem('authorization'),
        'Content-Type': 'application/json',
      },
    };
    fetch(`http://www.dynamicdoc.com.ar/hoja_de_ruta/${localStorage.getItem('url')}`, headers)
      .then((response) => {
        if (isMounted.current) {
          return response.json();
        }
      })
      .catch((error) => {
        if (isMounted.current) {
          console.log(`error: ${error}`);
          setSendData({
            ...sendData,
            loading: false,
            error,
          });
          return false;
        }
      })
      .then((response) => {
        if (response) {
          console.log(response);
          setSendData({
            ...sendData,
            response: {
              result: response.result,
              title: response.message,
              list: response.body,
            },
            loading: false,
            error: '',
          });
        }
      });
  };

  useEffect(() => {
    if (localStorage.getItem('hrData')) {
      hrData('bobinas').setData(JSON.parse(localStorage.getItem('hrData')), setEsNumerado);
      localStorage.removeItem('hrData');
    } else if (query.get('hr')) {
      getHr();
    }
    return () => {
      isMounted.current = false;
      controller.current.abort();
    };
  }, []);

  return (
    <>
      <Prompt
        when={localStorage.getItem('configuracion') === 'true' && true}
        message='¿Seguro que te quieres ir?'
      />
      <form onSubmit={handleSubmit} className='mx-4'>
        <HeaderHr />
        <BodyHr />
        <FooterHr esNumerado={esNumerado} setEsNumerado={setEsNumerado} />
        <SubmitHr response={sendData.response} errorData={sendData.error} />
      </form>
      <BgDark show={sendData.loading}>
        <div className='bg-white rounded p-1'>
          <LoaderEllipsis />
        </div>
      </BgDark>
    </>
  );
};

export default Hr;
