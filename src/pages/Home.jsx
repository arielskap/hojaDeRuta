import React, { useState } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import HeaderHr from '../components/Home/HeaderHr';
import FooterHr from '../components/Home/FooterHr';
import BodyHr from './BodyHr';
import HomeHeader from '../components/Home/HomeHeader';
import SubmitHr from '../components/Home/SubmitHr';
import Inicio from '../components/Home/Inicio';

const Home = () => {
  const { path } = useRouteMatch();
  const [url, setUrl] = useState('bobina/create');

  return (
    <div className='flex flex-col min-h-screen min-w-full animated fadeIn faster'>
      <HomeHeader />
      <div className='py-2 bg-white border-t-2 border-black flex-grow flex'>
        <Switch>
          <Route exact path='/hr'>
            <Inicio />
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
