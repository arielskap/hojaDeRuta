import React from 'react';

const DesgloseCremallera = ({ lado }) => {

  const conditionCm = () => {
    if (document.querySelector(`#desgloseCremallera_si${lado}`).checked) {
      document.querySelector(`#desglose_cm${lado}`).classList.remove('cursor-not-allowed');
      document.querySelector(`#desglose_cm${lado}`).removeAttribute('readOnly');
    } else {
      document.querySelector(`#desglose_cm${lado}`).classList.add('cursor-not-allowed');
      document.querySelector(`#desglose_cm${lado}`).setAttribute('readOnly', 'true');
    }
  };

  return (
    <div className='col-span-2'>
      <div>
        <p>{`DESGLOSE CREMALLERA ${lado}A`}</p>
        <div className='py-2'>
          <label htmlFor={`desgloseCremallera_no${lado}`}>
            <input className='mr-1' type='radio' name={`desgloseCremallera${lado}`} id={`desgloseCremallera_no${lado}`} defaultChecked onClick={conditionCm} />
            NO
          </label>
          <div className='flex mt-2'>
            <label className='flex items-center' htmlFor={`desgloseCremallera_si${lado}`}>
              <input className='mr-1' type='radio' name={`desgloseCremallera${lado}`} id={`desgloseCremallera_si${lado}`} onClick={conditionCm} />
              SI
            </label>
            <label className='flex ml-2 items-center' htmlFor={`desglose_cm${lado}`}>
              <input readOnly className='mr-1 cursor-not-allowed' type='number' name={`desglose_cm${lado}`} id={`desglose_cm${lado}`} />
              CM
            </label>
          </div>
        </div>
        <div>
          <p>{`CRIMP-LOCK ${lado}O`}</p>
          <div className='flex justify-around'>
            <label className='flex items-center' htmlFor={`crimpLock_si${lado}`}>
              <input className='mr-1' type='radio' name={`crimpLock${lado}`} id={`crimpLock_si${lado}`} />
              SI
            </label>
            <label className='flex items-center' htmlFor={`crimpLock_no${lado}`}>
              <input className='mr-1' type='radio' name={`crimpLock${lado}`} id={`crimpLock_no${lado}`} defaultChecked />
              NO
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesgloseCremallera;
