import React from 'react';
import ColoresSelectBody from './ColoresSelectBody';

const ColoresSelect = ({ id, hasParte }) => {

  return (
    <>
      {hasParte ? (
        <div className='grid grid-cols-12 border-b-2 mt-1 border-title-hr animated fadeIn faster'>
          <ColoresSelectBody id={id} hasParte={hasParte} />
        </div>
      ) :
        <ColoresSelectBody />}
    </>
  );
};

export default ColoresSelect;
