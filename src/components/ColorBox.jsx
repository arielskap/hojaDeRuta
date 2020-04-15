import React from 'react';

const ColorBox = ({ id }) => {
  return (
    <div className='box animated fadeIn faster'>
      <div className='grid grid-cols-5'>
        <div>
          <p className='bg-black text-white flex items-center justify-center'>{id}</p>
        </div>
        <div className='col-span-2'>
          <label className='flex items-center justify-center text-xs' htmlFor={`F${id}`}>
            <input type='checkbox' name={`F${id}`} id={`F${id}`} />
            <p className='ml-1'>F</p>
          </label>
        </div>
        <div className='col-span-2'>
          <label className='flex items-center justify-center text-xs' htmlFor={`D${id}`}>
            <input type='checkbox' name={`D${id}`} id={`D${id}`} />
            <p className='ml-1'>D</p>
          </label>
        </div>
      </div>
      <div className='p-2 text-xs'>
        <select>
          <option value='1'>NEGRO</option>
          <option value='2'>CYAN</option>
          <option value='3'>MAGENTA</option>
        </select>
      </div>
    </div>
  );
};

export default ColorBox;
