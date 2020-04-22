import React from './node_modules/react';
import '../../assets/styles/Loaders/loaderColors.css';

const LoaderColors = () => {
  return (
    <div className='LoaderColors loading-wrap gamba-circles'>
      <div className='circle' />
      <div className='circle' />
      <div className='circle' />
      <div className='circle' />
    </div>
  );
};

export default LoaderColors;
