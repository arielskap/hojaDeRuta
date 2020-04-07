import React from 'react';
import { useParams } from 'react-router-dom';
import '../assets/styles/checkbox.css';

const HeaderHr = () => {
  const { nameHr } = useParams();
  return (
    <div className='grid_parent grid grid-cols-16 border-2 border-title-hr rounded mb-2'>
      <div className='row-span-2 col-span-2'>
        <h2 className='text-center text-xl font-bold'>{nameHr.toLocaleUpperCase()}</h2>
        <label className='mt-2 flex items-center justify-center' htmlFor='seguridad'>
          <input className='input_checkbox_square' type='checkbox' name='seguridad' id='seguridad' required />
          <p className='ml-1'>SEGURIDAD</p>
        </label>
      </div>
      <div className='col-span-6 p-2'>
        <label className='inputTextNumber' htmlFor='nombreVendedor'>
          NOMBRE DEL VENDEDOR:
          <input type='text' name='nombreVendedor' id='nombreVendedor' required />
        </label>
      </div>
      <div className='col-span-2 grid grid-cols-2 gap-1'>
        <label className='inputCheckbox' htmlFor='sinPba'>
          SIN PBA
          <input type='checkbox' name='sinPba' id='sinPba' />
        </label>
        <label className='inputCheckbox' htmlFor='pbaImpresa'>
          PBA IMPRESA
          <input type='checkbox' name='pbaImpresa' id='pbaImpresa' defaultChecked />
        </label>
      </div>
      <div className='col-span-3 grid grid-cols-3 gap-1'>
        <label className='inputCheckbox' htmlFor='nuevo'>
          NUEVO
          <input type='checkbox' name='nuevo' id='nuevo' />
        </label>
        <label className='inputCheckbox' htmlFor='conCambios'>
          CON CAMBIOS
          <input type='checkbox' name='conCambios' id='conCambios' />
        </label>
        <label className='inputCheckbox' htmlFor='repetExacta'>
          REPT. EXACTA
          <input type='checkbox' name='repetExacta' id='repetExacta' defaultChecked />
        </label>
      </div>
      <div className='col-span-3 p-2'>
        <label className='inputTextNumber' htmlFor='ordenAnterior'>
          NRO. ORDEN ANTERIOR
          <input type='number' required />
        </label>
      </div>
      <div className='col-span-5 p-2 flex'>
        <label className='inputTextNumber' htmlFor='vendidoA'>
          VENDIDO A
          <input type='text' name='vendidoA' id='vendidoA' required />
        </label>
        <label className='inputTextNumber ml-2' htmlFor='codigoCliente'>
          CODIGO CLIENTE
          <input type='number' name='codigoCliente' id='codigoCliente' required />
        </label>
      </div>
      <div className='col-span-2 p-2'>
        <label className='inputTextNumber' htmlFor='materialEntregado'>
          MATERIAL ENTREGADO
          <select name='materialEntregado' id='materialEntregado' required>
            <option value={0}>ARCHIVO POR EMAIL</option>
            <option value={1}>CD / DVD</option>
            <option value={2}>MUESTRA IMPRESA</option>
          </select>
        </label>
      </div>
      <div className='col-span-2 p-2'>
        <label className='inputTextNumber' htmlFor='precostoNro'>
          PRECOSTO Nro.
          <input type='number' name='precostoNro' id='precostoNro' required />
        </label>
      </div>
      <div className='col-span-2 p-2'>
        <label className='inputTextNumber' htmlFor='nroOc'>
          NRO. O.C.
          <input type='number' name='nroOc' id='nroOc' required />
        </label>
      </div>
      <div className='col-span-3 p-2'>
        <label className='inputTextNumber' htmlFor='orden'>
          NÚMERO DE ORDEN
          <input type='number' name='orden' id='orden' required />
        </label>
      </div>
      <div className='col-span-2 p-2'>
        <label className='inputTextNumber' htmlFor='formula'>
          FORMULA
          <input type='text' name='formula' id='formula' required />
        </label>
      </div>
      <div className='col-span-2 p-2'>
        <label className='inputTextNumber' htmlFor='cantidad'>
          CANTIDAD
          <input type='text' name='cantidad' id='cantidad' required />
        </label>
      </div>
      <div className='col-span-5 p-2'>
        <label className='inputTextNumber' htmlFor='descripcionTrabajo'>
          DESCRIPCIÓN DEL TRABAJO
          <input type='text' name='descripcionTrabajo' id='descripcionTrabajo' required />
        </label>
      </div>
      <div className='col-span-2 p-2'>
        <label className='inputTextNumber' htmlFor='fechaEntrega'>
          FECHA DE ENTREGA
          <input type='date' name='fechaEntrega' id='fechaEntrega' required />
        </label>
      </div>
      <div className='col-span-1'>
        <label className='inputCheckbox h-full' htmlFor='multa'>
          MULTA
          <input className='input_checkbox_square' type='checkbox' name='multa' id='multa' />
        </label>
      </div>
      <div className='col-span-1'>
        <label className='inputCheckbox h-full' htmlFor='pieMaquina'>
          PIE DE MÁQUINA
          <input className='input_checkbox_square' type='checkbox' name='pieMaquina' id='pieMaquina' />
        </label>
      </div>
      <div className='col-span-3 p-2'>
        <label className='inputTextNumber' htmlFor='modulo'>
          MÓDULO
          <input type='text' name='modulo' id='modulo' required />
        </label>
        <label className='inputTextNumber' htmlFor='version'>
          VERSIÓN
          <input type='text' name='version' id='version' required />
        </label>
      </div>
    </div>
  );
};

export default HeaderHr;
