import React, { useState } from 'react';
import { Switch, Route, useRouteMatch, useHistory } from 'react-router-dom';
import LinkMenu from '../components/LinkMenu';
import HeaderHr from '../components/HeaderHr';
import FooterHr from '../components/FooterHr';
import Modal from '../components/Modal';
import BodyHr from './BodyHr';
import HomeHeader from '../components/HomeHeader';
import SubmitHr from '../components/SubmitHr';
import animateCSS from '../funciones';

const Home = () => {
  const { path } = useRouteMatch();
  const history = useHistory();
  const [url, setUrl] = useState('bobina/create');
  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => {
    animateCSS('.Modal', 'fadeOut faster');
    animateCSS('.Modal__container', 'slideOutUp faster', () => {
      setOpenModal(false);
    });
  };

  const handleLoginOut = () => {
    closeModal();
    history.push('/');
  };

  return (
    <div className='flex flex-col min-h-screen min-w-full animated fadeIn faster'>
      <HomeHeader />
      <div className='py-2 bg-white border-t-2 border-black flex-grow flex'>
        <Switch>
          <Route exact path='/hr'>
            <>
              <div className='grid grid-cols-2 gap-4 div_menu pt-6 flex-grow animated fadeIn faster'>
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
            </>
          </Route>
          <Route path={`${path}/:nameHr`}>
            <div className='mx-4'>
              <HeaderHr />
              <BodyHr setUrl={setUrl} />
              <FooterHr />
              <SubmitHr url={url} />
            </div>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Home;
