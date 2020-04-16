import React, { useState } from 'react';

const SubmitHr = ({ url }) => {
  const [header, setHeader] = useState({});
  const [body, setBody] = useState({});
  const [footer, setFooter] = useState({});

  const handleSubmit = () => {
    setHeader({
      seguridad: document.querySelector('#seguridad').checked,
      pba: document.querySelector('#pbaImpresa').checked,
      tipo: document.querySelector('#nuevo').checked ? 1 : document.querySelector('#conCambios').checked ? 2 : document.querySelector('#repetExacta').checked && 3,
      orden_anterior: document.querySelector('#ordenAnterior').value,
      codigo_cliente: document.querySelector('#codigoCliente').value,
      material_entregado: document.querySelector('#materialEntregado').value,
      precosto: document.querySelector('#precostoNro').value,
      orden_compra: document.querySelector('#nroOc').value,
      orden_actual: document.querySelector('#orden').value,
      formula: document.querySelector('#formula').value,
      cantidad: document.querySelector('#cantidad').value,
      descripcion_trabajo: document.querySelector('#descripcionTrabajo').value,
      fecha_entrega: document.querySelector('#fechaEntrega').value,
      multa: document.querySelector('#multa').checked,
      pie_maquina: document.querySelector('#pieMaquina').checked,
      modulo: document.querySelector('#modulo').value,
      version: document.querySelector('#version').value,
    });
    //ver pleca
    const inputsSentidoRebobinado = document.querySelectorAll("input[name='sentidoRebobinado']");
    let inputChecked;
    for (let i = 0; i < inputsSentidoRebobinado.length; i++) {
      const input = inputsSentidoRebobinado[i];
      if (input.checked) {
        inputChecked = i + 1;
        break;
      }
    }
    setBody({
      sentido_rebobinado: inputChecked,
      pleca: document.querySelector('#bodyBobinaSi').checked,
      acondicionamiento: document.querySelector('#bodyBobinasStreech').checked ? document.querySelector('#bodyBobinasStreech').value : document.querySelector('#bodyBobinasCarton').checked ? document.querySelector('#bodyBobinasCarton').value : document.querySelector('#bodyBobinasPallet').checked && document.querySelector('#bodyBobinasPallet').value,
      descripcion: document.querySelector('#bodyBobinasTextarea').value,
    });
    setFooter({
      numerar: document.querySelector('#numerarSi').checked,
      sistema_numerado: document.querySelector('#sistemaNumerado').value,
      digitos: document.querySelector('#digitos').value,
      color_numerado: document.querySelector('#tintaColor').value,
      codigo_barra: document.querySelector('#bidimensional').value,
      primer_prefijo: document.querySelector('#prefijo').value,
      numero_inicial: document.querySelector('#numeroInicial').value,
      segundo_prefijo: document.querySelector('#prefijo2').value,
      numero_final: document.querySelector('#numeroFinal').value,
      chequeo: document.querySelector('#chequeoSi').checked,
      descripcion: document.querySelector('#textareaNumeracion').value,
      diseño: document.querySelector('#textareaDiseño').value,
      impresion: document.querySelector('#textareaImpresion').value,
      terminacion: document.querySelector('#textareaTerminacion').value,
    });
    console.log(header);
    console.log(body);
    console.log(footer);
    const headers = { method: 'POST',
      obj_cabecera: JSON.stringify(header),
      obj_bobina: JSON.stringify(body),
      obj_pie: JSON.stringify(footer),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'same-origin',
    };

    fetch(`http://www.husaresfacil.com.ar/node_auth_server/${url}`, headers)
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.log(error);
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div className='my-4 flex justify-center'>
      <button onClick={handleSubmit} type='button' className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
        Enviar HR
      </button>
    </div>
  );
};

export default SubmitHr;
