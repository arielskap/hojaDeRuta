import React, { useRef } from 'react';
import ButtonGeneric from '../ButtonGeneric';

const SearchHr = ({ loading }) => {
  const user = useRef(JSON.parse(localStorage.getItem('user')));

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='p-2'>
      <form className='grid grid-cols-2 gap-4' onSubmit={handleSubmit}>
        <div>
          <label className='flex max-w-xs' htmlFor='searchHr_Cliente'>
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
          <label className='flex mt-2 max-w-xs' htmlFor='searchHr_Orden'>
            Orden:
            <input className='ml-1' type='number' name='searchHr_Orden' id='searchHr_Orden' />
          </label>
        </div>
        <div className='flex flex-col'>
          <label className='flex' htmlFor='searchHr_Alta'>
            Alta:
            <input className='ml-1' type='date' name='searchHr_Alta' id='searchHr_Alta' />
          </label>
          <label className='flex mt-2' htmlFor='searchHr_Hasta'>
            Hasta:
            <input className='ml-1' type='date' name='searchHr_Hasta' id='searchHr_Hasta' />
          </label>
        </div>
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
