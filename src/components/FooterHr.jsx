import React from 'react';

const FooterHr = () => {
  return (
    <div className='grid_parent grid grid-cols-6 border-2 border-title-hr rounded'>
      <div className='col-span-3'>
        <div>
          <h3>NUMERACIÓN Y DATOS VARIABLES</h3>
        </div>
        <div className='grid grid-cols-12 gap-1'>
          <div className='cols-span-3'>
            <h4>NUMERAR</h4>
            <label htmlFor='numerarSi'>
              <input type='checkbox' name='numerarSi' id='numerarSi' />
              SI
            </label>
            <label htmlFor='numerarNo'>
              <input type='checkbox' name='numerarNo' id='numerarNo' defaultChecked />
              NO
            </label>
          </div>
          <div className='cols-span-2'>
            <label htmlFor='sistemaNumerado'>
              SISTEMA DE NUMERADO
              <select name='sistemaNumerado' ids='sistemaNumerado'>
                <option value='1'>IMPACTO</option>
                <option value='2'>LASER</option>
                <option value='3'>INKJET</option>
                <option value='4'>MATRICIAL</option>
              </select>
            </label>
          </div>
        </div>
      </div>
      <div />
      <div />
      <div />
    </div>
  );
};

export default FooterHr;
