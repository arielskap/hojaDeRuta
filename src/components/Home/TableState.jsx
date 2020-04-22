import React, { useState, useEffect } from 'react';
import LoaderEllipsis from '../Loaders/LoaderEllipsis';
import Td from './Td';

const TableState = () => {
  const [bobinas, setBobinas] = useState({
    lista: [],
    loading: true,
    error: '',
  });

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

    fetch('http://www.dynamicdoc.com.ar/hoja_de_ruta/bobina/read/pagination/0', headers)
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.log(`error: ${error}`);
        setBobinas({ ...bobinas, loading: false, error });
        return false;
      })
      .then((response) => {
        if (response) {
          setBobinas({ lista: response.body, loading: false, error: '' });
        }
      });
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      {bobinas.loading ? (
        <div className='flex justify-center items-center'>
          <LoaderEllipsis />
        </div>
      ) : bobinas.error ? (
        <div className='flex justify-center items-center'>
          <p className='text-red-600 font-bold text-lg text-center'>{`Error: ${bobinas.error}`}</p>
        </div>
      ) : (
        <div>
          <div>
            <label className='flex' htmlFor=''>
              Cliente:
              <select className='ml-1 max-w-sm' name='' id='' />
            </label>
            <div className='flex mt-2 mb-4'>
              <label className='flex' htmlFor=''>
                Orden:
                <input type='number' name='' id='' />
              </label>
              Fecha
              <label className='flex' htmlFor=''>
                Alta:
                <input type='number' name='' id='' />
              </label>
              <label className='flex' htmlFor=''>
                Hasta:
                <input type='number' name='' id='' />
              </label>
              <button type='button'>Buscar</button>
            </div>
          </div>
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
        </div>
      )}
    </>
  );
};

export default TableState;
