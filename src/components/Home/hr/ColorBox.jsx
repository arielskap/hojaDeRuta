import React from 'react';

const ColorBox = ({ id, parte }) => {
  return (
    <div className={`box animated fadeIn faster colorBox${parte || 1} box${id}${parte || '1'} text-xxs`}>
      <div className='grid grid-cols-5'>
        <div>
          <p className={`bg-black text-white flex items-center justify-center parteId${id}${parte || '1'}`}>{id}</p>
        </div>
        <div className='col-span-2 pt-1'>
          <label className='flex items-center justify-center' htmlFor={`F${id}${parte || '1'}`}>
            <input type='radio' name={`colorBox_letra${id}${parte || '1'}`} id={`F${id}${parte || '1'}`} defaultChecked />
            <p className='ml-1'>F</p>
          </label>
        </div>
        <div className='col-span-2 pt-1'>
          <label className='flex items-center justify-center' htmlFor={`D${id}${parte || '1'}`}>
            <input type='radio' name={`colorBox_letra${id}${parte || '1'}`} id={`D${id}${parte || '1'}`} />
            <p className='ml-1'>D</p>
          </label>
        </div>
      </div>
      <div className='p-1'>
        <select name={`colorBox__select${id}${parte || '1'}`} id={`colorBox__select${id}${parte || '1'}`}>
          <option value='1'>NEGRO</option>
          <option value='2'>CYAN</option>
          <option value='3'>MAGENTA</option>
        </select>
      </div>
    </div>
  );
};

export default ColorBox;
