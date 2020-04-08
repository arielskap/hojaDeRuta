import React, { useRef } from 'react';
import '../assets/styles/bodyBobinas.css';
import '../assets/styles/checkbox.css';
import paper from '../assets/static/paper.svg';

const generateBoxes = () => {
  const MAX_BOXES = 10;
  const newObject = [];
  for (let i = 1; i <= MAX_BOXES; i++) {
    newObject.push({
      'id': i,
    });
  }
  return newObject;
};

const BodyBobinas = () => {
  const boxes = useRef(generateBoxes());
  const bobinas = useRef([{
    'id': 1,
    'position': 'derecho',
  }, {
    'id': 2,
    'position': 'al reves',
  }, {
    'id': 3,
    'position': 'izquierda',
  }, {
    'id': 4,
    'position': 'derecha',
  }, {
    'id': 5,
    'position': 'izquierda',
  }, {
    'id': 6,
    'position': 'derecha',
  }, {
    'id': 7,
    'position': 'derecho',
  }, {
    'id': 8,
    'position': 'al reves',
  }]);
  return (
    <div>
      <div className='grid grid-cols-12 col-gap-2'>
        <div className='col-span-4 grid grid-cols-12'>
          <div className='col-span-12 grid grid-cols-12 border border-title-hr rounded text-xs text-center'>
            <div className='col-span-4'>
              <h3>TIPO DE PAPEL</h3>
            </div>
            <div className='col-span-1'>
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
            <div className='col-span-4 p-2'>
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
        </div>
        <div className='col-span-8 grid grid-cols-10 gap-2'>
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
        <div className='grid grid-cols-12 col-span-12 border-t-2 border-title-hr'>
          <div className='col-span-6 p-1 border-r-2 border-title-hr'>
            <div className='grid grid-cols-5 bg-gray-500 rounded p-1'>
              <div className='col-span-2'>
                <h3 className='font-bold text-center'>SENTIDO DE REBOBINADO</h3>
              </div>
              <div className='col-span-3'>
                <h3 className='text-center text-xs'>PARA MARCAR EL SENTIDO DE REBOBINADO TOMAR COMO REFERENCIA EL FRENTE</h3>
              </div>
            </div>
            <div className='grid grid-cols-8 gap-2'>
              {bobinas.current.map((bobina) => {
                const { id, position } = bobina;
                return (
                  <div key={id}>
                    <div>
                      <p className='font-bold text-center text-lg text-hr'>{id}</p>
                    </div>
                    <div className='flex items-center justify-center'>
                      <img className='object-contain h-full w-16' src={paper} alt={`paper_${id}`} />
                    </div>
                    <div className='flex justify-center items-center my-3'>
                      <input className='w-6 h-6' type='checkbox' />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className='col-span-1 flex flex-col p-1 border-r-2 border-title-hr'>
            <div className='bg-gray-500 rounded p-1'>
              <h3 className='text-center font-bold'>PLECA</h3>
            </div>
            <div className='flex flex-col items-center justify-center flex-grow'>
              <p className='text-center'>LLEVA PLECA DE CORTE</p>
              <div className='grid grid-cols-2'>
                <label className='flex items-center justify-center' htmlFor='bodyBobinaSi'>
                  <input type='checkbox' name='bodyBobinaSi' id='bodyBobinaSi' />
                  SI
                </label>
                <label className='flex items-center justify-center' htmlFor='bodyBobinaNo'>
                  <input type='checkbox' name='bodyBobinaNo' id='bodyBobinaNo' defaultChecked />
                  NO
                </label>
              </div>
            </div>
          </div>
          <div className='col-span-5 flex flex-col p-1'>
            <div className='bg-gray-500 rounded p-1'>
              <h3 className='text-center font-bold'>ACONDICIONAMIENTO</h3>
            </div>
            <div className='grid grid-cols-3 flex-grow'>
              <div className='col-span-2 grid grid-cols-3'>
                <div className='flex justify-center items-center flex-col'>
                  <div className='flex items-center justify-center'>
                    <img className='object-contain h-full w-10' src={paper} alt='STREECH' />
                  </div>
                  <label className='flex items-center justify-center' htmlFor='bodyBobinasStreech'>
                    <input type='checkbox' name='bodyBobinasStreech' id='bodyBobinasStreech' />
                    <p className='ml-1'>STREECH</p>
                  </label>
                </div>
                <div className='flex justify-center items-center flex-col'>
                  <div className='flex items-center justify-center'>
                    <img className='object-contain h-full w-10' src={paper} alt='CARTÓN' />
                  </div>
                  <label className='flex items-center justify-center' htmlFor='bodyBobinasCarton'>
                    <input type='checkbox' name='bodyBobinasCarton' id='bodyBobinasCarton' />
                    <p className='ml-1'>CARTÓN</p>
                  </label>
                </div>
                <div className='flex justify-center items-center flex-col'>
                  <div className='flex items-center justify-center'>
                    <img className='object-contain h-full w-10' src={paper} alt='STREECH EN PALLET' />
                  </div>
                  <label className='flex items-center justify-center' htmlFor='bodyBobinasPallet'>
                    <input type='checkbox' name='bodyBobinasPallet' id='bodyBobinasPallet' />
                    <p className='ml-1'>STREECH EN PALLET</p>
                  </label>
                </div>
              </div>
              <div className='flex'>
                <div className='flex-grow p-2'>
                  <textarea className='resize-none w-full h-full' name='bodyBobinasTextarea' id='bodyBobinasTextarea' cols='30' rows='3' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div />
    </div>
  );
};

export default BodyBobinas;
