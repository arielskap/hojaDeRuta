import React, { useRef } from 'react';
import ButtonGeneric from '../ButtonGeneric';

const SearchHr = ({ loading }) => {
  const user = useRef(JSON.parse(localStorage.getItem('user')));

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='p-2'>
      <form className='grid grid-cols-7 gap-4 text-sm' onSubmit={handleSubmit}>
        <label className='flex max-w-xs col-span-4' htmlFor='searchHr_Cliente'>
          Cliente:
          <select className='ml-1' name='searchHr_Cliente' id='searchHr_Cliente'>
            <option value=''>---</option>
            {user.current.lista_empresas.map((empresa, index) => {
              const { id, razonSocial, codigoEmpresa, activo } = empresa;
              if (!activo) {
                return null;
              }
              return (
                <option value={codigoEmpresa} key={id}>{`${codigoEmpresa}. ${razonSocial}`}</option>
              );
            })}
          </select>
        </label>
        <label className='flex max-w-xs col-span-3' htmlFor='searchHr_Orden'>
          Nro.Orden:
          <input className='ml-1' type='number' name='searchHr_Orden' id='searchHr_Orden' />
        </label>
        <label className='flex items-center justify-center col-span-3' htmlFor='searchHr_Alta'>
          Alta:
          <input className='ml-1' type='date' name='searchHr_Alta' id='searchHr_Alta' />
        </label>
        <label className='flex items-center justify-center col-span-3' htmlFor='searchHr_Hasta'>
          Hasta:
          <input className='ml-1' type='date' name='searchHr_Hasta' id='searchHr_Hasta' />
        </label>
        <div className='flex justify-center'>
          <ButtonGeneric type='submit' color='blue' disabled={loading}>
            Buscar
          </ButtonGeneric>
        </div>
      </form>
    </div>
  );
};

export default SearchHr;
