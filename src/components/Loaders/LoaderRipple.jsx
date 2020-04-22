import React from 'react';
import '../../assets/styles/Loaders/loaderRipple.css';

const LoaderRipple = () => (
  <div className='flex flex-grow justify-center items-center'>
    <div className='lds-ripple'>
      <div />
      <div />
    </div>
  </div>
);

export default LoaderRipple;
