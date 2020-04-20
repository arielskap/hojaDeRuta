import React from 'react';
import logoChozas from '../assets/static/logo_chozas2.png';
import imgPerfil from '../assets/static/user.svg';
import '../assets/styles/homeHeader.css';

const HomeHeader = () => {
  const { vendedor } = JSON.parse(localStorage.getItem('user'));
  const { nombre, apellido } = vendedor;
  return (
    <div className='Home__header flex items-center justify-around text-white'>
      <div className='w-24'>
        <img className='object-contain h-full w-full' src={logoChozas} alt='Logo Chozas' />
      </div>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-2xl'>Ramon Chozas S.A</h1>
        <h2 className='text-lg'>Nueva Hoja De Ruta</h2>
      </div>
      <div className='flex justify-end items-center div_perfil'>
        <div className='w-16'>
          <img className='rounded-full object-contain h-full w-full' src={imgPerfil} alt='Perfil' />
        </div>
        <div className='ml-4 text-xl'>
          <p>{`${nombre} ${apellido}`}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
