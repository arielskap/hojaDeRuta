import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import LoaderEllipsis from '../loaders/LoaderEllipsis';
import Td from './Td';
import ButtonGeneric from '../ButtonGeneric';
import SearchHr from './SearchHr';

const TableState = () => {
  const history = useHistory();
  const [pagination, setPagination] = useState(0);
  const [realoadPagination, setRealoadPagination] = useState(0);
  const [bobinas, setBobinas] = useState({
    response: {
      pages: 0,
      list_bobinas: [],
    },
    loading: false,
    error: '',
  });
  const isMounted = useRef(true);

  const goToThisBobina = (index) => {
    localStorage.setItem('hrData', JSON.stringify(bobinas.response.list_bobinas[index]));
    history.push(`/hr/type/bobinas?hr=${bobinas.response.list_bobinas[index].id}`);
  };

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const headers = { method: 'GET',
      signal,
      headers: {
        'authorization': localStorage.getItem('authorization'),
        'Content-Type': 'application/json',
      },
      credentials: 'same-origin',
    };

    setBobinas({ ...bobinas, loading: true });

    fetch(`http://www.dynamicdoc.com.ar/hoja_de_ruta/bobina/read/pagination/${pagination}`, headers)
      .then((response) => {
        if (isMounted.current) {
          return response.json();
        }
      })
      .catch((error) => {
        if (isMounted.current) {
          console.log(`error: ${error}`);
          setBobinas({ ...bobinas, loading: false, error });
          return false;
        }
      })
      .then((response) => {
        if (response) {
          console.log(response);
          setBobinas({ ...bobinas, response: response.body, loading: false, error: '' });
        }
      });
    return () => {
      controller.abort();
    };
  }, [pagination, realoadPagination]);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <>
      {bobinas.loading ? (
        <div>
          <SearchHr loading={true} />
          <div className='flex justify-center items-center'>
            <LoaderEllipsis />
          </div>
        </div>
      ) : bobinas.error ? (
        <div className='flex flex-col justify-center items-center'>
          <p className='text-red-600 font-bold text-lg text-center'>{`Error: ${bobinas.error}`}</p>
          <ButtonGeneric
            handleClick={() => {
              setRealoadPagination(realoadPagination + 1);
            }}
            color='green'
          >
            Recargar
          </ButtonGeneric>
        </div>
      ) : (
        <div className='flex flex-col'>
          <SearchHr />
          <table className='text-xs block overflow-y-auto h-64 overflow-x-hidden border-2 rounded flex-grow animated fadeIn faster'>
            <thead>
              <tr>
                <th className='px-1 py-1 sticky top-0 bg-blue-200'>HR</th>
                <th className='px-1 py-1 sticky top-0 bg-blue-200'>Fecha</th>
                <th className='px-1 py-1 sticky top-0 bg-blue-200'>Tipo</th>
                <th className='px-1 py-1 sticky top-0 bg-blue-200'>Orden</th>
                <th className='w-2/12  px-1 py-1 sticky top-0 bg-blue-200'>Producto</th>
                <th className='w-2/12  px-1 py-1 sticky top-0 bg-blue-200'>Cliente</th>
                <th className='w-2/12  px-1 py-1 sticky top-0 bg-blue-200'>Orden de Compra</th>
                <th className='px-1 py-1 sticky top-0 bg-blue-200'>Cant. Form.</th>
                <th className='px-1 py-1 sticky top-0 bg-blue-200'>Entrega</th>
              </tr>
            </thead>
            <tbody>
              {bobinas.response.list_bobinas.map((bobina, index) => {
                const { id, fechaCreacion, descripcion, cabecera: { tipo, ordenActual, ordenCompra, cantidad, fechaEntrega }, empresa: { razonSocial } } = bobina;
                let parseFechaCreacion = new Date(fechaCreacion);
                let parseFechaEntrega = new Date(fechaEntrega);
                parseFechaCreacion = `${parseFechaCreacion.getUTCMonth() + 1}/${parseFechaCreacion.getUTCDate()}/${parseFechaCreacion.getUTCFullYear()}`;
                parseFechaEntrega = `${parseFechaEntrega.getUTCMonth() + 1}/${parseFechaEntrega.getUTCDate()}/${parseFechaEntrega.getUTCFullYear()}`;
                return (
                  <tr key={id} onClick={() => { goToThisBobina(index); }} className='hover:bg-blue-400 cursor-pointer'>
                    <Td>
                      {id}
                    </Td>
                    <Td>
                      {parseFechaCreacion}
                    </Td>
                    <Td>
                      {tipo}
                    </Td>
                    <Td>
                      {ordenActual}
                    </Td>
                    <Td>
                      {descripcion}
                    </Td>
                    <Td>
                      {razonSocial}
                    </Td>
                    <Td>
                      {ordenCompra}
                    </Td>
                    <Td>
                      {cantidad}
                    </Td>
                    <Td>
                      {parseFechaEntrega}
                    </Td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className='flex justify-end mt-2'>
            {pagination > 0 && (
              <ButtonGeneric
                className='mr-2'
                type='button'
                handleClick={() => {
                  setPagination(pagination - 1);
                }}
                color='red'
              >
                Anterior
              </ButtonGeneric>
            )}
            { bobinas.response.pages >= pagination && (
              <ButtonGeneric
                type='button'
                handleClick={() => {
                  setPagination(pagination + 1);
                }}
                color='blue'
              >
                Siguiente
              </ButtonGeneric>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default TableState;
