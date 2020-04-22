import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import HomeHeader from '../components/home/HomeHeader';
import Inicio from '../components/home/Inicio';
import Hr from '../components/home/hr/Hr';

const Home = () => {
  const { path } = useRouteMatch();

  return (
    <div className='flex flex-col min-h-screen min-w-full animated fadeIn faster'>
      <HomeHeader />
      <div className='py-2 bg-white border-t-2 border-black flex-grow flex justify-center'>
        <div className='container'>
          <Switch>
            <Route exact path='/hr'>
              <Inicio />
            </Route>
            <Route path={`${path}/:nameHr`}>
              <Hr />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Home;
