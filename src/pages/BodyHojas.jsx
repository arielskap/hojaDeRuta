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
        <div className='col-span-10' />
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
