import React, { useEffect } from 'react';
import '../assets/styles/configuracion.css';

const Configuracion = () => {

  const questionHr = () => {
    if (document.querySelector('#switch').checked) {
      localStorage.setItem('configuracion', 'true');
    } else {
      localStorage.removeItem('configuracion');
    }
  };

  useEffect(() => {
    if (localStorage.getItem('configuracion')) {
      document.querySelector('#switch').checked = true;
    }
  }, []);

  return (
    <section className='bg-blue-200 flex-grow rounded p-4 animated fadeIn faster'>
      <h1 className='text-center text-xl font-bold text-title-hr'>Configuracion</h1>
      <div className='flex'>
        <div className='border-2 border-blue-300 rounded p-2'>
          <label htmlFor='switch' className='switch mr-2'>
            <input type='checkbox' id='switch' onChange={questionHr} />
            <span className='slider round' />
          </label>
          Preguntar al abandonar la hoja de ruta
        </div>
      </div>
    </section>
  );
};

export default Configuracion;
