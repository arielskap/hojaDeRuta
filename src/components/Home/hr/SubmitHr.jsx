import React from 'react';
import ButtonGeneric from '../../ButtonGeneric';

const SubmitHr = ({ response, errorData }) => {
  return (
    <div className='my-4 grid grid-cols-3 gap-4'>
      <div className='p-2 border border-title-hr rounded'>
        <h4 className='text-center font-bold text-lg'>{`${errorData}` || response.title || 'Lista de errores'}</h4>
        <ul>
          {response.list.map((error, index) => {
            const { propiedad, errores } = error;
            return (
              <li key={index}>
                <span className='font-bold'>{`${propiedad}: `}</span>
                {errores.map((error) => `${error}, `)}
              </li>
            );
          })}
        </ul>
      </div>
      <div className='flex justify-center'>
        <div>
          <ButtonGeneric type='submit' color='blue'>
            Enviar HR
          </ButtonGeneric>
        </div>
      </div>
    </div>
  );
};

export default SubmitHr;
