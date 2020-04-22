import React from 'react';

const ButtonGeneric = ({ handleClick, color, type, className, children, disabled }) => (
  // eslint-disable-next-line react/button-has-type
  <button onClick={handleClick} className={`${className} bg-${color}-500 hover:bg-${color}-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-red-400 disabled:cursor-not-allowed transition disabled:duration-300`} type={type || 'button'} tabIndex={0} disabled={disabled}>
    {children}
  </button>
);

export default ButtonGeneric;
