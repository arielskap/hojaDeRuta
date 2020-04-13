import React from 'react';
import ColoresSelectBody from './ColoresSelectBody';

const ColoresSelect = ({ id, hasParte }) => {

  return (
    <>
      {hasParte ? (
        <div className='grid grid-cols-12 col-gap-2 border-b-2 mt-2 border-title-hr'>
          <ColoresSelectBody id={id} hasParte={hasParte} />
        </div>
      ) :
        <ColoresSelectBody />}
    </>
  );
};

export default ColoresSelect;
