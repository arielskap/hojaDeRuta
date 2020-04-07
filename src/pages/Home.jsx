import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import LinkMenu from '../components/LinkMenu';
import HojaRuta from './HojaRuta';
import HeaderHr from '../components/HeaderHr';
import FooterHr from '../components/FooterHr';

const Home = () => {
  const { path } = useRouteMatch();
  return (
    <div className='mt-4'>
      <h1 className='text-xl text-center font-bold mb-4 text-title-hr'>Nueva Hoja de Ruta</h1>
      <Switch>
        <Route exact path='/hr'>
          <div className='flex flex-col items-center justify-center'>
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
        </Route>
        <Route path={`${path}/:nameHr`}>
          <div className='mx-4'>
            <HeaderHr />
            <HojaRuta />
            <FooterHr />
          </div>
        </Route>
      </Switch>
    </div>
  );
};

export default Home;
