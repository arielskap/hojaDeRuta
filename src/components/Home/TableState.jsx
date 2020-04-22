import React, { useState, useEffect, useRef } from 'react';
import LoaderEllipsis from '../loaders/LoaderEllipsis';
import Td from './Td';
import ButtonGeneric from '../ButtonGeneric';
import SearchHr from './SearchHr';

const TableState = () => {
  const [pagination, setPagination] = useState(0);
  const [bobinas, setBobinas] = useState({
    lista: [],
    loading: false,
    error: '',
  });
  const isMounted = useRef(true);

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
          setBobinas({ lista: response.body, loading: false, error: '' });
        }
      });
    return () => {
      isMounted.current = false;
      controller.abort();
    };
  }, [pagination]);

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
              setPagination(pagination + 1);
            }}
            color='green'
          >
            Recargar
          </ButtonGeneric>
        </div>
      ) : (
        <div>
          <SearchHr />
          <table className='table-fixed text-sm'>
            <thead>
              <tr>
                <th className='px-2 py-1'>HR</th>
                <th className='px-2 py-1'>Fecha</th>
                <th className='px-2 py-1'>Tipo</th>
                <th className='px-2 py-1'>Orden</th>
                <th className='w-2/12  px-2 py-1'>Producto</th>
                <th className='w-2/12  px-2 py-1'>Cliente</th>
                <th className='w-2/12  px-2 py-1'>Orden de Compra</th>
                <th className='px-2 py-1'>Cant.Form.</th>
                <th className='px-2 py-1'>Entrega</th>
              </tr>
            </thead>
            <tbody>
              {bobinas.lista.map((bobina) => {
                const { id, fechaCreacion, descripcion, sentidoBobina, cabecera } = bobina;
                const { tipo, ordenActual, ordenCompra, cantidad, fechaEntrega } = cabecera;
                let parseFechaCreacion = new Date(fechaCreacion);
                let parseFechaEntrega = new Date(fechaEntrega);
                parseFechaCreacion = `${parseFechaCreacion.getUTCMonth() + 1}/${parseFechaCreacion.getUTCDate()}/${parseFechaCreacion.getUTCFullYear()}`;
                parseFechaEntrega = `${parseFechaEntrega.getUTCMonth() + 1}/${parseFechaEntrega.getUTCDate()}/${parseFechaEntrega.getUTCFullYear()}`;
                return (
                  <tr key={id}>
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
                      {sentidoBobina}
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
            <ButtonGeneric
              type='button'
              handleClick={() => {
                setPagination(pagination + 1);
              }}
              color='blue'
            >
              Siguiente
            </ButtonGeneric>
          </div>
        </div>
      )}
    </>
  );
};

export default TableState;
