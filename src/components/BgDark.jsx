import React from 'react';
import ReactDOM from 'react-dom';

const BgDark = ({ children, show }) => {
  if (!show) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className='fixed top-0 left-0 flex justify-center items-center bg-black-transparent-5 animated fadeIn faster z-30 w-screen h-screen'>
      {children}
    </div>,
    document.getElementById('bgDark'),
  );
};

export default BgDark;
