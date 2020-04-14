import React, { useRef } from 'react';
import ColoresSelect from '../components/ColoresSelect';
import Acondicionamiento from '../components/Acondicionamiento';

const BodyMultiset = () => {
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
    <div className='text-xs'>
      {colores.current.map(({ id }) => {
        return (
          <ColoresSelect key={id} id={id} hasParte={true} />
        );
      })}
      <div className='grid grid-cols-12'>
        <div className='col-span-10 grid grid-cols-3'>
          <div className='flex flex-col border-r-2 border-title-hr px-2 py-1'>
            <label className='py-1 flex justify-center items-center bg-gray-600 rounded mt-2 mx-1 font-bold' htmlFor=''>
              <input className='mr-1' type='checkbox' name='' id='' />
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
              <input className='mr-1' type='checkbox' name='' id='' />
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
                  <input className='ml-1' type='checkbox' name='' id='' />
                </label>
                <div />
              </div>
            </div>
          </div>
          <div className='border-r-2 border-title-hr px-2 py-1'>
            <label className='py-1 flex justify-center items-center bg-gray-600 rounded mt-2 mx-1 font-bold' htmlFor=''>
              <input className='mr-1' type='checkbox' name='' id='' />
              BLOCKS
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
                    <input className='mr-1' type='checkbox' name='' id='' />
                    SNAP
                  </label>
                  <label className='flex' htmlFor=''>
                    <input type='number' name='' id='' />
                    CM
                  </label>
                  <label className='flex' htmlFor=''>
                    <input className='ml-1' type='checkbox' name='' id='' />
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
