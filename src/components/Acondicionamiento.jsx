import React from 'react';

const Acondicionamiento = ({ objeto, de }) => {
  return (
    <div className='p-2'>
      <div>
        <img src={null} alt={objeto} />
      </div>
      <div>
        <h4>{objeto}</h4>
        <hr />
        <label className='flex items-center' htmlFor=''>
          DE
          <input className='mx-1' type='number' name='' id='' />
          {de}
        </label>
      </div>
    </div>
  );
};

export default Acondicionamiento;
