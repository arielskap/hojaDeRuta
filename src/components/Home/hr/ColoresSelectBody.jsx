import React, { useState } from 'react';
import ColorBox from './ColorBox';
import Modal from '../../Modal';
import cross from '../../../assets/static/cross.svg';
import minus from '../../../assets/static/minus.svg';
import { animateCSS } from '../../../funciones';

const ColoresSelectBody = ({ id, hasParte }) => {
  const [colorBox, setColorBox] = useState(JSON.parse(localStorage.getItem('hrData')) ? [].concat(JSON.parse(localStorage.getItem('hrData')).hoja.colores.map((color, index) => {
    const idColor = color.id;
    return <ColorBox parte={id} id={index + 1} key={idColor} />;
  })) : [<ColorBox parte={id} id={1} key={0} />]);
  const [openModal, setOpenModal] = useState(false);
  const handleAddColorBox = () => {
    setColorBox(colorBox.concat(<ColorBox parte={id} id={colorBox.length + 1} key={colorBox.length} />));
  };

  const closeModal = () => {
    animateCSS('.Modal', 'fadeOut faster');
    animateCSS('.Modal__container', 'slideOutUp faster', () => {
      setOpenModal(false);
    });
  };

  const handleLessColorBox = () => {
    closeModal();
    animateCSS(`.box${colorBox.length}${id || '1'}`, 'fadeOut faster', () => {
      const colorBoxLess = colorBox;
      colorBoxLess.splice(-1, 1);
      setColorBox([...colorBoxLess]);
    });
  };

  return (
    <>
      <div className={`col-span-4 grid grid-cols-12 text-xxs ColoresSelectBody ColoresSelectBody${id || '1'}`}>
        { (id === 1 || id === undefined) && (
          <div className='col-span-12 grid grid-cols-12 border border-title-hr rounded text-center'>
            {hasParte && (
              <div>
                <h3>PARTE</h3>
              </div>
            )}
            <div className={hasParte ? 'col-span-3' : 'col-span-4'}>
              <h3>TIPO DE PAPEL</h3>
            </div>
            <div>
              <h3>GRS.</h3>
            </div>
            <div className='col-span-4'>
              <h3 className='font-bold'>MEDIDA</h3>
            </div>
            <div className='col-span-2'>
              <div className='grid grid-cols-2 text-xxxs'>
                <h4>PERPEND.</h4>
                <h4>PARAL:</h4>
              </div>
            </div>
            <div className='col-span-1 text-xxxs'>
              <h3>ARCHIVO</h3>
            </div>
          </div>
        )}
        <div className='col-span-12 grid grid-cols-12 space-x-1'>
          {hasParte && (
            <div className='flex justify-center'>
              <input readOnly defaultValue={id} type='number' name='coloresSelectBody__parte' id={`coloresSelectBody__parte${id || '1'}`} />
            </div>
          )}
          <div className={`${hasParte ? 'col-span-3' : 'col-span-4'}`}>
            <select name='coloresSelectBody__tipoPapel' id={`coloresSelectBody__tipoPapel${id || '1'}`} required>
              <option value=''>---</option>
              <option value='OBRA'>OBRA</option>
              <option value='QUIM. CF'>QUIM. CF</option>
              <option value='QUIM. CB'>QUIM. CB</option>
              <option value='QUIM. CFB'>QUIM. CFB</option>
              <option value='FLIG. RCH'>FLIG. RCH</option>
            </select>
          </div>
          <div className='col-span-1'>
            <input name='coloresSelectBody__grs' id={`coloresSelectBody__grs${id || '1'}`} type='text' />
          </div>
          <div className='col-span-4 grid grid-cols-5'>
            <div className='col-span-2'>
              <input name='coloresSelectBody__medidaPrimera' id={`coloresSelectBody__medidaPrimera${id || '1'}`} type='text' required />
            </div>
            <p className='text-center mt-1 font-bold'>x</p>
            <div className='col-span-2'>
              <input name='coloresSelectBody__medidaSegunda' id={`coloresSelectBody__medidaSegunda${id || '1'}`} type='text' required />
            </div>
          </div>
          <div className='col-span-2 grid grid-cols-2 col-gap-2'>
            <div>
              <input name='coloresSelectBody__perfoPerper' id={`coloresSelectBody__perfoPerper${id || '1'}`} type='number' min={1} max={15} />
            </div>
            <div>
              <input name='coloresSelectBody__perfoParal' id={`coloresSelectBody__perfoParal${id || '1'}`} type='number' min={1} max={15} />
            </div>
          </div>
          <div className='col-span-1'>
            <input name='coloresSelectBody__perfoArchivo' id={`coloresSelectBody__perfoArchivo${id || '1'}`} type='checkbox' />
          </div>
        </div>
        { hasParte && (
          <div className='col-span-12 flex rounded bg-gray-200 mb-2'>
            <p>TRANSCRIPCION ENTRE COPIAS</p>
            <div className='flex justify-center flex-grow'>
              <label className='flex items-center ' htmlFor='coloresSelectBody__total'>
                <input defaultValue='Total' className='mr-1' type='radio' name={`coloresSelectBody__transcripcion${id || '1'}`} id={`coloresSelectBody__total${id || '1'}`} defaultChecked />
                TOTAL
              </label>
              <label className='flex items-center ml-2' htmlFor='coloresSelectBody__parcial'>
                <input defaultValue='Parcial' className='mr-1' type='radio' name={`coloresSelectBody__transcripcion${id || '1'}`} id={`coloresSelectBody__parcial${id || '1'}`} />
                PARCIAL
              </label>
            </div>
          </div>
        )}
      </div>
      <div className='col-span-8 grid grid-cols-10 gap-1 text-xxs'>
        { (id === 1 || id === undefined) && (
          <div className='bg-black col-span-10 rounded'>
            <h3 className='text-white font-bold h-full flex items-center justify-center'>COLORES</h3>
          </div>
        )}
        <div className='col-span-10 grid grid-cols-12 boxes'>
          {colorBox}
          <div className='flex justify-around'>
            {colorBox.length > 1 && (
              <div className='flex justify-center items-center'>
                <button onClick={() => { setOpenModal(true) ; }} className='w-8 h-8 p-2 border border-black rounded-full' type='button'>
                  <img className='object-contain' src={minus} alt='Agregar color' />
                </button>
              </div>
            )}
            { colorBox.length < 12 &&
              (
                <div className='flex justify-center items-center'>
                  <button onClick={handleAddColorBox} className='w-8 h-8 p-2 border border-black rounded-full' type='button'>
                    <img className='object-contain transform rotate-45' src={cross} alt='Agregar color' />
                  </button>
                </div>
              )}
          </div>
        </div>
      </div>
      <Modal isOpen={openModal} onClose={closeModal}>
        <div className='pt-2 pb-3 w-64'>
          <h3 className='text-center font-bold text-xl'>¿Eliminar color?</h3>
          <div className='flex justify-around mt-2'>
            <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded' type='button' onClick={closeModal}>Cancelar</button>
            <button className='bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-2 border border-red-500 hover:border-transparent rounded' type='button' onClick={handleLessColorBox}>Aceptar</button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ColoresSelectBody;
