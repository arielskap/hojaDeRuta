import React, { useState } from 'react';
import Modal from '../Modal';
import ColoresSelect from './ColoresSelect';
import { animateCSS } from '../../funciones';
import cross from '../../assets/static/cross.svg';
import minus from '../../assets/static/minus.svg';

const ColoresSelectAddLess = () => {
  const [coloresSelect, setColoresSelect] = useState([<ColoresSelect id={1} hasParte={true} key={0} />]);
  const [openModal, setOpenModal] = useState(false);

  const handleAddParte = () => {
    setColoresSelect(coloresSelect.concat(<ColoresSelect id={coloresSelect.length + 1} hasParte={true} key={coloresSelect.length} />));
  };

  const closeModal = () => {
    animateCSS('.Modal', 'fadeOut faster');
    animateCSS('.Modal__container', 'slideOutUp faster', () => {
      setOpenModal(false);
    });
  };

  const handleLessParte = () => {
    closeModal();
    const coloresSelectLess = coloresSelect;
    coloresSelectLess.splice(-1, 1);
    setColoresSelect([...coloresSelectLess]);
  };

  return (
    <>
      {coloresSelect}
      <div className='flex justify-center items-center my-2'>
        {coloresSelect.length > 1 && (
          <div className='flex justify-center items-center mr-10'>
            <button onClick={() => { setOpenModal(true) ; }} className='w-8 h-8 p-2 border border-black rounded-full' type='button'>
              <img className='object-contain' src={minus} alt='Agregar color' />
            </button>
          </div>
        )}
        <button onClick={handleAddParte} className='w-8 h-8 p-2 border border-black rounded-full' type='button'>
          <img className='object-contain transform rotate-45' src={cross} alt='Agregar color' />
        </button>
      </div>
      <Modal isOpen={openModal} onClose={closeModal}>
        <div className='pt-2 pb-3 w-64 px-10'>
          <h3 className='text-center font-bold text-xl'>{`¿Eliminar parte Nro: ${coloresSelect.length}?`}</h3>
          <div className='flex justify-around mt-2'>
            <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded' type='button' onClick={closeModal}>Cancelar</button>
            <button className='bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-2 border border-red-500 hover:border-transparent rounded' type='button' onClick={handleLessParte}>Aceptar</button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ColoresSelectAddLess;
