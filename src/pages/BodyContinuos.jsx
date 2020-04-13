import React, { useRef } from 'react';
import ColoresSelect from '../components/ColoresSelect';
import DesgloseCremallera from '../components/DesgloseCremallera';
import Acondicionamiento from '../components/Acondicionamiento';

const BodyContinuos = () => {
  const colores = useRef([
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
  ]);
  return (
    <>
      {colores.current.map(({ id }) => {
        return (
          <ColoresSelect key={id} id={id} hasParte={true} />
        );
      })}
      <div className='grid grid-cols-12 text-xs'>
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
                <label className='flex items-center' htmlFor=''>
                  <input className='mr-1' type='checkbox' name='' id='' />
                  IZQ.
                </label>
                <label className='flex items-center' htmlFor=''>
                  <input className='mr-1' type='checkbox' name='' id='' />
                  DER.
                </label>
                <label className='flex items-center' htmlFor=''>
                  <input className='mr-1' type='checkbox' name='' id='' />
                  CAB.
                </label>
                <label className='flex items-center' htmlFor=''>
                  <input className='mr-1' type='checkbox' name='' id='' />
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
    </>
  );
};

export default BodyContinuos;
