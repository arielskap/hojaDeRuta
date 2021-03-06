import React from 'react';
import Acondicionamiento from './Acondicionamiento';
import ColoresSelectAddLess from './ColoresSelectAddLess';

const BodyMultiset = () => {
  return (
    <div className='text-xs animated fadeIn faster'>
      <ColoresSelectAddLess />
      <div className='grid grid-cols-12 border-t-2 border-title-hr'>
        <div className='col-span-10 grid grid-cols-3'>
          <div className='flex flex-col border-r-2 border-title-hr px-2 py-1'>
            <label className='py-1 flex justify-center items-center bg-gray-600 rounded mt-2 mx-1 font-bold' htmlFor=''>
              <input className='mr-1' type='radio' name='multiset_radio' id='' defaultChecked />
              TALONARIOS
            </label>
            <div className='grid grid-cols-2 flex-grow'>
              <div>
                <img src={null} alt='Talonarios' />
              </div>
              <div className='flex flex-col justify-around'>
                <label className='flex' htmlFor=''>
                  UBICACIÓN TALÓN
                  <input type='text' name='' id='' />
                </label>
                <label className='flex' htmlFor=''>
                  TAMAÑO DEL TALÓN
                  <input type='number' name='' id='' />
                  CM
                </label>
                <label className='flex' htmlFor=''>
                  JUEGOS POR TALONARIO
                  <input type='text' name='' id='' />
                </label>
                <div />
              </div>
            </div>
          </div>
          <div className='border-r-2 border-title-hr px-2 py-1 flex flex-col'>
            <label className='py-1 flex justify-center items-center bg-gray-600 rounded mt-2 mx-1 font-bold' htmlFor=''>
              <input className='mr-1' type='radio' name='multiset_radio' id='' />
              BLOCKS
            </label>
            <div className='grid grid-cols-2 flex-grow'>
              <div>
                <img src={null} alt='Blocks' />
              </div>
              <div className='flex flex-col justify-around'>
                <label className='flex' htmlFor=''>
                  UBICACIÓN DEL ENGOMADO
                  <select name='' id=''>
                    <option>DERECHA</option>
                    <option>IZQUIERDA</option>
                    <option>PIE</option>
                    <option>CABEZA</option>
                  </select>
                </label>
                <label className='flex' htmlFor=''>
                  <input className='mr-1' type='checkbox' name='' id='' />
                  ENGOMADO SELECTIVO
                </label>
                <label className='flex' htmlFor=''>
                  JUEGOS POR BLOCK
                  <input className='ml-1' type='number' name='' id='' />
                </label>
                <div />
              </div>
            </div>
          </div>
          <div className='border-r-2 border-title-hr px-2 py-1'>
            <label className='py-1 flex justify-center items-center bg-gray-600 rounded mt-2 mx-1 font-bold' htmlFor=''>
              <input className='mr-1' type='radio' name='multiset_radio' id='' />
              MULTISET
            </label>
            <div className='grid grid-cols-3 flex-grow'>
              <div>
                <img src={null} alt='Blocks' />
              </div>
              <div className='col-span-2 flex flex-col justify-around'>
                <div className='flex'>
                  <label className='flex' htmlFor=''>
                    UBICACIÓN TALÓN
                    <input type='text' name='' id='' />
                  </label>
                  <label className='flex' htmlFor=''>
                    TAMAÑO DEL TALÓN
                    <input type='number' name='' id='' />
                    CM
                  </label>
                </div>
                <hr />
                <div className='flex'>
                  <label className='flex' htmlFor=''>
                    <input className='mr-1' type='radio' name='multiset_radio_type' id='' />
                    SNAP
                  </label>
                  <label className='flex' htmlFor=''>
                    <input type='number' name='' id='' />
                    CM
                  </label>
                  <label className='flex' htmlFor=''>
                    <input className='ml-1' type='radio' name='multiset_radio_type' id='' />
                    JUEGOS SUELTOS
                  </label>
                </div>
                <div className='flex'>
                  <label className='flex' htmlFor=''>
                    JUEGOS POR MULTISET
                    <input type='number' name='' id='' />
                  </label>
                  <label className='flex' htmlFor=''>
                    FAJOS DE
                    <input type='number' name='' id='' />
                    JUEGOS
                  </label>
                </div>
              </div>
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

export default BodyMultiset;
