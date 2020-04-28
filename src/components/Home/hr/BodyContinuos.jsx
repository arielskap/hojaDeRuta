import React from 'react';
import DesgloseCremallera from './DesgloseCremallera';
import Acondicionamiento from './Acondicionamiento';
import ColoresSelectAddLess from './ColoresSelectAddLess';

const BodyContinuos = () => {
  return (
    <div className='animated fadeIn faster'>
      <ColoresSelectAddLess />
      <div className='grid grid-cols-12 text-xs border-t-2 border-title-hr'>
        <div className='col-span-10 grid grid-cols-12 border-r-2 border-title-hr pb-3'>
          <DesgloseCremallera lado='IZQUIERD' />
          <div className='col-span-4'>
            <img src={null} alt='Hoja' />
          </div>
          <DesgloseCremallera lado='DERECH' />
          <div className='col-span-4 py-2 px-4 flex flex-col'>
            <div className='p-2 bg-gray-600 rounded mb-2'>
              <h3 className='text-center text-sm mb-1'>APERTURA SOBRE</h3>
              <div className='flex justify-around'>
                <label className='flex items-center' htmlFor='bodyContinuos_izq'>
                  <input className='mr-1' type='radio' name='bodyContinuos_aperturaSobre' id='bodyContinuos_izq' defaultChecked />
                  IZQ.
                </label>
                <label className='flex items-center' htmlFor='bodyContinuos_der'>
                  <input className='mr-1' type='radio' name='bodyContinuos_aperturaSobre' id='bodyContinuos_der' />
                  DER.
                </label>
                <label className='flex items-center' htmlFor='bodyContinuos_cab'>
                  <input className='mr-1' type='radio' name='bodyContinuos_aperturaSobre' id='bodyContinuos_cab' />
                  CAB.
                </label>
                <label className='flex items-center' htmlFor='bodyContinuos_pie'>
                  <input className='mr-1' type='radio' name='bodyContinuos_aperturaSobre' id='bodyContinuos_pie' />
                  PIE
                </label>
              </div>
            </div>
            <div className='flex-grow'>
              <textarea className='w-full h-full' name='' id='' cols='30' rows='3' />
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
