import React, { useState, useEffect, useRef } from 'react';
import HeaderHr from './HeaderHr';
import BodyHr from './BodyHr';
import FooterHr from './FooterHr';
import SubmitHr from './SubmitHr';
import BgDark from '../../BgDark';
import LoaderEllipsis from '../../loaders/LoaderEllipsis';
import hrData from '../../../hrData';

const Hr = () => {
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
      credentials: 'same-origin',
    };
    console.log(headers.body);
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
      hrData('bobinas').setData(JSON.parse(localStorage.getItem('hrData')));
      localStorage.removeItem('hrData');
    }
    return () => {
      isMounted.current = false;
      controller.current.abort();
    };
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit} className='mx-4'>
        <HeaderHr />
        <BodyHr />
        <FooterHr />
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
