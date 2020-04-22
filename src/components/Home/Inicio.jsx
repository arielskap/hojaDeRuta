import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { animateCSS } from '../../funciones';
import Ballons from './Ballons';
import LinkMenu from './LinkMenu';
import Modal from '../Modal';
import TableState from './TableState';

const Inicio = () => {
  const history = useHistory();
  const [openModal, setOpenModal] = useState(false);
  const [happy, setHappy] = useState((!localStorage.getItem('happy') || localStorage.getItem('happy') === null) && true);

  const closeModal = () => {
    animateCSS('.Modal', 'fadeOut faster');
    animateCSS('.Modal__container', 'slideOutUp faster', () => {
      setOpenModal(false);
    });
  };

  const handleLoginOut = () => {
    closeModal();
    localStorage.setItem('user', '');
    localStorage.setItem('authorization', '');
    history.push('/');
  };

  useEffect(() => {
    let ballonsTime;
    if (happy) {
      ballonsTime = setTimeout(() => {
        animateCSS('#ballon', 'fadeOut faster', () => {
          setHappy(false);
        });
      }, 5000);
      localStorage.setItem('happy', 'false');
    }
    return () => {
      clearTimeout(ballonsTime);
    };
  }, [happy]);

  return (
    <>
      <div className='grid grid-cols-2 gap-4 div_menu px-4 pt-6 flex-grow animated fadeIn faster'>
        <div className='flex flex-col text-xl'>
          <div className='flex justify-center items-center flex-col px-12'>
            <LinkMenu to='bobinas'>
              Bobinas
            </LinkMenu>
            <LinkMenu to='continuos'>
              Continuos
            </LinkMenu>
            <LinkMenu to='hojas'>
              Hojas
            </LinkMenu>
            <LinkMenu to='multiset'>
              Multiset
            </LinkMenu>
          </div>
          <div className='flex justify-around mt-24'>
            <div>
              <button onClick={() => { setOpenModal(true) ; }} type='button' className='bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-8 border border-teal-700 rounded'>Cerrar Sesión</button>
            </div>
          </div>
        </div>
        <TableState />
      </div>
      <Modal isOpen={openModal} onClose={closeModal}>
        <div className='pt-2 pb-3 w-64'>
          <h3 className='text-center font-bold text-xl'>¿Cerrar Sesión?</h3>
          <div className='flex justify-around mt-2'>
            <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded' type='button' onClick={closeModal}>Cancelar</button>
            <button className='bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-2 border border-red-500 hover:border-transparent rounded' type='button' onClick={handleLoginOut}>Aceptar</button>
          </div>
        </div>
      </Modal>
      <Ballons isHappy={happy} />
    </>
  );
};

export default Inicio;
