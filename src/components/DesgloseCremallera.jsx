import React from 'react';

const DesgloseCremallera = ({ lado }) => {
  return (
    <div className='col-span-2'>
      <div>
        <p>{`DESGLOSE CREMALLERA ${lado}A`}</p>
        <div className='py-2'>
          <label htmlFor=''>
            <input className='mr-1' type='checkbox' name='' id='' defaultChecked />
            NO
          </label>
          <div className='flex mt-2'>
            <label className='flex items-center' htmlFor=''>
              <input className='mr-1' type='checkbox' name='' id='' />
              SI
            </label>
            <label className='flex ml-2 items-center' htmlFor=''>
              <input className='mr-1' type='number' name='' id='' />
              CM
            </label>
          </div>
        </div>
        <div>
          <p>{`CRIMP-LOCK ${lado}O`}</p>
          <div className='flex justify-around'>
            <label className='flex items-center' htmlFor=''>
              <input className='mr-1' type='checkbox' name='' id='' />
              SI
            </label>
            <label className='flex items-center' htmlFor=''>
              <input className='mr-1' type='checkbox' name='' id='' defaultChecked />
              NO
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesgloseCremallera;
