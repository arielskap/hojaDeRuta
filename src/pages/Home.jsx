import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeHeader from '../components/home/HomeHeader';
import Inicio from '../components/home/Inicio';
import Hr from '../components/home/hr/Hr';
import Configuracion from './Configuracion';

const Home = () => {
  return (
    <div className='flex flex-col min-h-screen min-w-full animated fadeIn faster'>
      <HomeHeader />
      <div className='py-2 bg-white border-t-2 border-black flex-grow flex justify-center'>
        <div className='container flex flex-col'>
          <Switch>
            <Route exact path='/hr'>
              <Inicio />
            </Route>
            <Route path='/hr/type/:nameHr'>
              <Hr />
            </Route>
            <Route path='/hr/configuracion'>
              <Configuracion />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Home;
