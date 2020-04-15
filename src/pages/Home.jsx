import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import LinkMenu from '../components/LinkMenu';
import HeaderHr from '../components/HeaderHr';
import FooterHr from '../components/FooterHr';
import BodyHr from './BodyHr';
import HomeHeader from '../components/HomeHeader';

const Home = () => {
  const { path } = useRouteMatch();
  /*
    //register
alias: "asv"
nombre: "Ariel"
apellido: "Villareal"
edad: 21
dni: 87888888
correo: "aasd@hotmail.com"
*/
  /*const header = { method: 'POST',
      body: JSON.stringify({
        alias: 'jjj',
        nombre: 'jor',
        apellido: 'sdasd',
        edad: 21,
        dni: 41557945,
        correo: 'hola@hotmail.com',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'same-origin',
    };
    fetch('http://www.husaresfacil.com.ar/node_auth_server/register', header)
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.log(error);
      })
      .then((response) => {
        console.log(response);
      });*/
  return (
    <div className='flex flex-col min-h-screen min-w-full animated fadeIn faster'>
      <HomeHeader />
      <div className='py-2 bg-white border-t-2 border-black flex-grow'>
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
              <BodyHr />
              <FooterHr />
            </div>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Home;
