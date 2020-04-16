import React from 'react';

const FooterHr = () => {
  return (
    <div className='grid grid-cols-7 border-2 border-title-hr rounded'>
      <div className='col-span-4 border-r-2 border-title-hr'>
        <div className='border-b border-title-hr'>
          <h3 className='text-center font-bold'>NUMERACIÓN Y DATOS VARIABLES</h3>
        </div>
        <div className='grid grid-cols-12 gap-1 text-xxs'>
          <div className='col-span-3 font-bold text-xs flex items-center justify-center p-2'>
            <h4 className='text-xxs'>NUMERAR</h4>
            <label className='flex justify-center items-center ml-2 text-xxs' htmlFor='numerarSi'>
              <input className='mr-1' type='radio' name='numerar' id='numerarSi' />
              SI
            </label>
            <label className='flex justify-center items-center ml-2 text-xxs' htmlFor='numerarNo'>
              <input className='mr-1' type='radio' name='numerar' id='numerarNo' defaultChecked />
              NO
            </label>
          </div>
          <div className='col-span-2 p-2'>
            <label className='inputTextNumber text-xxs' htmlFor='sistemaNumerado'>
              SISTEMA DE NUMERADO
              <select name='sistemaNumerado' id='sistemaNumerado'>
                <option value='1'>IMPACTO</option>
                <option value='2'>LASER</option>
                <option value='3'>INKJET</option>
                <option value='4'>MATRICIAL</option>
              </select>
            </label>
          </div>
          <div className='col-span-2 p-2'>
            <label className='inputTextNumber' htmlFor='digitos'>
              DIGITOS
              <input type='number' name='digitos' id='digitos' />
            </label>
          </div>
          <div className='col-span-2 p-2'>
            <label className='inputTextNumber' htmlFor='tintaColor'>
              TINTA/COLOR NUMERADO
              <select name='tintaColor' id='tintaColor'>
                <option value='1'>NEGRO</option>
                <option value='2'>ROJO</option>
                <option value='3'>SANGRANTE</option>
                <option value='4'>PENETRANTE</option>
              </select>
            </label>
          </div>
          <div className='col-span-3 p-2'>
            <label className='inputTextNumber' htmlFor='bidimensional'>
              TIPO DE CODIGO DE BARRAS / BIDIMENSIONAL
              <select name='bidimensional' id='bidimensional'>
                <option value='1'>EAN 13</option>
                <option value='2'>3 DE 9</option>
                <option value='3'>2 DE 5</option>
                <option value='4'>CODIGO 128</option>
                <option value='5'>QR</option>
                <option value='6'>DATAMATRIX</option>
              </select>
            </label>
          </div>
          <div className='col-span-2 p-2'>
            <label className='inputTextNumber' htmlFor='prefijo'>
              PREFIJO/SERIE
              <input type='text' name='prefijo' id='prefijo' />
            </label>
          </div>
          <div className='col-span-2 p-2'>
            <label className='inputTextNumber' htmlFor='numeroInicial'>
              NUMERO INICIAL
              <input type='number' name='numeroInicial' id='numeroInicial' />
            </label>
          </div>
          <div className='flex items-center justify-center relative'>
            <hr className='trasversal' />
          </div>
          <div className='col-span-2 p-2'>
            <label className='inputTextNumber' htmlFor='prefijo2'>
              PREFIJO/SERIE
              <input type='text' name='prefijo2' id='prefijo2' />
            </label>
          </div>
          <div className='col-span-2 p-2'>
            <label className='inputTextNumber' htmlFor='numeroFinal'>
              NUMERO FINAL
              <input type='number' name='numeroFinal' id='numeroFinal' />
            </label>
          </div>
          <div className='col-span-3 font-bold text-xxs p-2'>
            <h4 className='text-center'>LLEVA DIGITO DE CHEQUEO</h4>
            <div className='flex justify-center'>
              <label className='flex ml-2' htmlFor='chequeoSi'>
                <input type='radio' name='chequeo' id='chequeoSi' />
                SI
              </label>
              <label className='flex ml-1' htmlFor='chequeoNo'>
                <input type='radio' name='chequeo' id='chequeoNo' defaultChecked />
                NO
              </label>
            </div>
          </div>
          <div className='col-span-12 p-2'>
            <textarea className='resize-none w-full h-full' name='textareaNumeracion' id='textareaNumeracion' cols='30' rows='3' />
          </div>
        </div>
      </div>
      <div className='flex flex-col border-r-2 border-title-hr'>
        <div className='border-b border-title-hr'>
          <h3 className='text-center font-bold'>DISEÑO</h3>
        </div>
        <div className='flex-grow p-2'>
          <textarea className='resize-none w-full h-full' name='textareaDiseño' id='textareaDiseño' cols='30' rows='3' />
        </div>
      </div>
      <div className='flex flex-col border-r-2 border-title-hr'>
        <div className='border-b border-title-hr'>
          <h3 className='text-center font-bold'>IMPRESIÓN</h3>
        </div>
        <div className='flex-grow p-2'>
          <textarea className='resize-none w-full h-full' name='textareaImpresion' id='textareaImpresion' cols='30' rows='3' />
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='border-b border-title-hr'>
          <h3 className='text-center font-bold'>TERMINACIÓN</h3>
        </div>
        <div className='flex-grow p-2'>
          <textarea className='resize-none w-full h-full' name='textareaTerminacion' id='textareaTerminacion' cols='30' rows='3' />
        </div>
      </div>
    </div>
  );
};

export default FooterHr;
