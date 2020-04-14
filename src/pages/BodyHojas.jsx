import React from 'react';
import ColoresSelect from '../components/ColoresSelect';
import DesgloseCremallera from '../components/DesgloseCremallera';
import Acondicionamiento from '../components/Acondicionamiento';

const BodyContinuos = () => {
  return (
    <>
      <div className='grid grid-cols-12 col-gap-2'>
        <ColoresSelect />
      </div>
      <div className='grid grid-cols-12 col-span-12 border-t-2 border-title-hr text-xs'>
        <div className='col-span-10'>
          <label className='py-1 flex justify-center items-center bg-gray-600 rounded mt-2 font-bold' htmlFor=''>
            <input className='mr-1' type='checkbox' name='' id='' />
            LINEA FACIL
          </label>
          <div className='grid grid-cols-12 my-2'>
            <div className='col-span-5 flex border-r-2 border-title-hr'>
              <div>
                <label className='flex' htmlFor=''>
                  <input className='mr-1' type='checkbox' name='' id='' />
                  <img src={null} alt='Facil Mail' />
                </label>
                <p>MÉTODO DE CERRADO</p>
              </div>
              <label className='flex flex-col' htmlFor=''>
                <img src={null} alt='v' />
                <div className='flex items-center'>
                  <input className='mr-1' type='checkbox' name='' id='' />
                  <p>v</p>
                </div>
              </label>
              <label className='flex flex-col' htmlFor=''>
                <img src={null} alt='c' />
                <div className='flex items-center'>
                  <input className='mr-1' type='checkbox' name='' id='' />
                  <p>c</p>
                </div>
              </label>
              <label className='flex flex-col' htmlFor=''>
                <img src={null} alt='z' />
                <div className='flex items-center'>
                  <input className='mr-1' type='checkbox' name='' id='' />
                  <p>z</p>
                </div>
              </label>
              <label className='flex items-end' htmlFor=''>
                <input className='mr-1' type='checkbox' name='' id='' />
                OTRO
              </label>
            </div>
            <div className='col-span-3 flex border-r-2 border-title-hr'>
              <div>
                <label className='flex' htmlFor=''>
                  <input className='mr-1' type='checkbox' name='' id='' />
                  <img src={null} alt='Facil Mail' />
                </label>
                <label htmlFor=''>
                  PARCHE APTO PARA
                  <input type='text' name='' id='' />
                </label>
              </div>
              <div className='flex flex-col'>
                <label htmlFor=''>
                  <input className='mr-1' type='checkbox' name='' id='' />
                  TARJETA STANDARD
                </label>
                <label htmlFor=''>
                  <input className='mr-1' type='checkbox' name='' id='' />
                  SÓLO PARCHE DORSO
                </label>
                <label htmlFor=''>
                  <input className='mr-1' type='checkbox' name='' id='' />
                  MARIPOSA
                </label>
              </div>
            </div>
            <div className='col-span-2' />
            <div className='col-span-2' />
          </div>
        </div>
        <div className='col-span-2 px-2 pt-2 pb-5'>
          <h3 className='text-center rounded bg-gray-200 font-bold'>ACONDICIONAMIENTO</h3>
          <div className='flex justify-between'>
            <Acondicionamiento objeto='PAQUETES' de='CONTINUOS' />
            <Acondicionamiento objeto='CAJAS' de='PAQUETES' />
          </div>
        </div>
      </div>
    </>
  );
};

export default BodyContinuos;
