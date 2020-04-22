import React, { useRef } from 'react';
import '../assets/styles/bodyBobinas.css';
import '../assets/styles/checkbox.css';
import paper from '../assets/static/paper.svg';
import ColoresSelect from '../components/Home/ColoresSelect';

const BodyBobinas = () => {
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
    <div className='animated fadeIn faster'>
      <div className='grid grid-cols-12 col-gap-2'>
        <ColoresSelect />
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
                      <input className='w-6 h-6' type='radio' name='sentidoRebobinado' defaultChecked={bobinas.current.length === id} />
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
                  <input type='radio' name='bodyBobinaPleca' id='bodyBobinaSi' />
                  SI
                </label>
                <label className='flex items-center justify-center' htmlFor='bodyBobinaNo'>
                  <input type='radio' name='bodyBobinaPleca' id='bodyBobinaNo' defaultChecked />
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
                    <input type='radio' name='bodyBobinasAcondicionamiento' id='bodyBobinasStreech' defaultChecked />
                    <p className='ml-1'>STREECH</p>
                  </label>
                </div>
                <div className='flex justify-center items-center flex-col'>
                  <div className='flex items-center justify-center'>
                    <img className='object-contain h-full w-10' src={paper} alt='CARTÓN' />
                  </div>
                  <label className='flex items-center justify-center' htmlFor='bodyBobinasCarton'>
                    <input type='radio' name='bodyBobinasAcondicionamiento' id='bodyBobinasCarton' />
                    <p className='ml-1'>CARTÓN</p>
                  </label>
                </div>
                <div className='flex justify-center items-center flex-col'>
                  <div className='flex items-center justify-center'>
                    <img className='object-contain h-full w-10' src={paper} alt='STREECH EN PALLET' />
                  </div>
                  <label className='flex items-center justify-center' htmlFor='bodyBobinasPallet'>
                    <input type='radio' name='bodyBobinasAcondicionamiento' id='bodyBobinasPallet' />
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
    </div>
  );
};

export default BodyBobinas;
