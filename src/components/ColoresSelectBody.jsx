import React, { useRef } from 'react';
import generateBoxes from '../localFunctions';

const ColoresSelectBody = ({ id, hasParte }) => {
  const boxes = useRef(generateBoxes());
  return (
    <>
      <div className='col-span-4 grid grid-cols-12'>
        <div className='col-span-12 grid grid-cols-12 border border-title-hr rounded text-xs text-center'>
          {hasParte && (
            <div>
              <h3>PARTE</h3>
            </div>
          )}
          <div className={hasParte ? 'col-span-3' : 'col-span-4'}>
            <h3>TIPO DE PAPEL</h3>
          </div>
          <div>
            <h3>GRS.</h3>
          </div>
          <div className='col-span-4'>
            <h3 className='font-bold'>MEDIDA</h3>
          </div>
          <div className='col-span-2 text-xxs'>
            <h3>PERFORACIONES</h3>
            <div className='grid grid-cols-2'>
              <h4>PERPEND.</h4>
              <h4>PARAL:</h4>
            </div>
          </div>
          <div className='col-span-1 text-xxs'>
            <h3>PERF. ARCHIVO</h3>
          </div>
        </div>
        <div className='col-span-12 grid grid-cols-12 text-xs'>
          {hasParte && (
            <div className='flex justify-center items-center'>
              <p className='shadow border rounded py-1 px-2 text-gray-700 leading-tight bg-gray-400 font-bold text-sm'>{id}</p>
            </div>
          )}
          <div className={`${hasParte ? 'col-span-3' : 'col-span-4'} p-2`}>
            <select name='' id=''>
              <option value='1'>OBRA</option>
              <option value='2'>QUIM. CF</option>
              <option value='3'>QUIM. CB</option>
              <option value='4'>QUIM. CFB</option>
              <option value='5'>FLIG. RCH</option>
            </select>
          </div>
          <div className='col-span-1 p-2'>
            <input type='text' />
          </div>
          <div className='col-span-4 p-2 grid grid-cols-5'>
            <input className='col-span-2' type='number' />
            <p className='flex items-center justify-center'>x</p>
            <input className='col-span-2' type='number' />
          </div>
          <div className='col-span-2 p-2 grid grid-cols-2 gap-2'>
            <input type='text' />
            <input type='text' />
          </div>
          <div className='col-span-1 p-2'>
            <input type='checkbox' />
          </div>
        </div>
        { hasParte && (
          <div className='col-span-12 text-xs flex rounded p-2 bg-gray-200 mb-2'>
            <p>TRANSCRIPCION ENTRE COPIAS</p>
            <div className='flex justify-center flex-grow'>
              <label className='flex items-center ' htmlFor='coloresSelectBody__total'>
                <input className='mr-1' type='checkbox' name='coloresSelectBody__total' id='coloresSelectBody__total' />
                TOTAL
              </label>
              <label className='flex items-center ml-2' htmlFor='coloresSelectBody__parcial'>
                <input className='mr-1' type='checkbox' name='coloresSelectBody__parcial' id='coloresSelectBody__parcial' />
                PARCIAL
              </label>
            </div>
          </div>
        )}
      </div>
      <div className={`col-span-8 grid grid-cols-10 gap-2 ${hasParte && 'row-span-2'}`}>
        <div className='bg-black col-span-10 rounded'>
          <h3 className='text-white font-bold text-xs h-full flex items-center justify-center'>COLORES</h3>
        </div>
        <div className='col-span-10 grid grid-cols-10 boxes'>
          {boxes.current.map((box) => {
            const { id } = box;
            return (
              <div className='box' key={id}>
                <div className='grid grid-cols-5'>
                  <div>
                    <p className='bg-black text-white flex items-center justify-center'>{id}</p>
                  </div>
                  <div className='col-span-2'>
                    <label className='flex items-center justify-center text-xs' htmlFor={`F${id}`}>
                      <input type='checkbox' name={`F${id}`} id={`F${id}`} />
                      <p className='ml-1'>F</p>
                    </label>
                  </div>
                  <div className='col-span-2'>
                    <label className='flex items-center justify-center text-xs' htmlFor={`D${id}`}>
                      <input type='checkbox' name={`D${id}`} id={`D${id}`} />
                      <p className='ml-1'>D</p>
                    </label>
                  </div>
                </div>
                <div className='p-2 text-xs'>
                  <select>
                    <option value='1'>NEGRO</option>
                    <option value='2'>CYAN</option>
                    <option value='3'>MAGENTA</option>
                  </select>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ColoresSelectBody;
