import React from 'react';
import ColoresSelect from './ColoresSelect';
import Acondicionamiento from './Acondicionamiento';

const BodyContinuos = () => {
  return (
    <div className='animated fadeIn faster'>
      <div className='grid grid-cols-12 col-gap-2'>
        <ColoresSelect />
      </div>
      <div className='grid grid-cols-12 col-span-12 border-t-2 border-title-hr text-xs'>
        <div className='col-span-10 border-r-2 border-title-hr'>
          <label className='py-1 flex justify-center items-center bg-gray-600 rounded mt-2 mx-1 font-bold' htmlFor=''>
            <input className='mr-1' type='checkbox' name='' id='' />
            LINEA FACIL
          </label>
          <div className='grid grid-cols-12 my-2'>
            <div className='col-span-5 flex border-r border-title-hr px-2'>
              <div>
                <label className='flex' htmlFor=''>
                  <input className='mr-1' type='radio' name='facilRadio' id='' defaultChecked />
                  <img src={null} alt='Facil Mail' />
                </label>
                <p>MÉTODO DE CERRADO</p>
              </div>
              <label className='flex flex-col' htmlFor=''>
                <img src={null} alt='v' />
                <div className='flex items-center'>
                  <input className='mr-1' type='radio' name='radio_facilMail' id='' />
                  <p>v</p>
                </div>
              </label>
              <label className='flex flex-col' htmlFor=''>
                <img src={null} alt='c' />
                <div className='flex items-center'>
                  <input className='mr-1' type='radio' name='radio_facilMail' id='' />
                  <p>c</p>
                </div>
              </label>
              <label className='flex flex-col' htmlFor=''>
                <img src={null} alt='z' />
                <div className='flex items-center'>
                  <input className='mr-1' type='radio' name='radio_facilMail' id='' />
                  <p>z</p>
                </div>
              </label>
              <label className='flex items-end' htmlFor=''>
                <input className='mr-1' type='radio' name='radio_facilMail' id='' />
                OTRO
              </label>
            </div>
            <div className='col-span-3 flex border-r border-title-hr px-2'>
              <div className='flex flex-col justify-between pr-4'>
                <label className='flex' htmlFor=''>
                  <input className='mr-1' type='radio' name='facilRadio' id='' />
                  <img src={null} alt='Facil Card' />
                </label>
                <label htmlFor=''>
                  PARCHE APTO PARA
                  <input type='text' name='' id='' />
                </label>
              </div>
              <div className='flex flex-col'>
                <label htmlFor=''>
                  <input className='mr-1' type='radio' name='radio_facilCard' id='' />
                  TARJETA STANDARD
                </label>
                <label htmlFor=''>
                  <input className='mr-1' type='radio' name='radio_facilCard' id='' />
                  SÓLO PARCHE DORSO
                </label>
                <label htmlFor=''>
                  <input className='mr-1' type='radio' name='radio_facilCard' id='' />
                  MARIPOSA
                </label>
              </div>
            </div>
            <div className='col-span-2 border-r border-title-hr px-2'>
              <label className='flex' htmlFor=''>
                <input className='mr-1' type='radio' name='facilRadio' id='' />
                <img src={null} alt='Facil Card' />
              </label>
            </div>
            <div className='col-span-2 px-2'>
              <label className='flex' htmlFor=''>
                <input className='mr-1' type='radio' name='facilRadio' id='' />
                <img src={null} alt='Facil Security' />
              </label>
              <label htmlFor=''>
                CANTIDAD DE PARCHES
                <input type='number' name='' id='' />
              </label>
            </div>
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
    </div>
  );
};

export default BodyContinuos;
