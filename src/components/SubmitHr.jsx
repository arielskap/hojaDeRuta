import React, { useRef, useState } from 'react';

const SubmitHr = ({ url }) => {
  const header = useRef({});
  const body = useRef({});
  const footer = useRef({});
  const [errors, setErrors] = useState({
    title: '',
    list: [],
  });

  const errores = (response) => {
    console.log(response);
    setErrors({
      title: response.message,
      list: response.body,
    });
  };

  const handleSubmit = () => {
    header.current = {
      codigo_empresa: parseInt(document.querySelector('#headerHrCodigoEmpresa').value, 10),
      seguridad: document.querySelector('#seguridad').checked,
      pba: document.querySelector('#pbaImpresa').checked,
      type: document.querySelector('#nuevo').checked ? document.querySelector('#nuevo').value : document.querySelector('#conCambios').checked ? document.querySelector('#conCambios').value : document.querySelector('#repetExacta').checked && document.querySelector('#repetExacta').value,
      orden_anterior: parseInt(document.querySelector('#ordenAnterior').value, 10),
      material_entregado: document.querySelector('#materialEntregado').value,
      precosto: parseInt(document.querySelector('#precostoNro').value, 10),
      orden_compra: document.querySelector('#nroOc').value,
      orden_actual: parseInt(document.querySelector('#orden').value, 10),
      formula: document.querySelector('#formula').value,
      cantidad: parseInt(document.querySelector('#cantidad').value, 10),
      descripcion: document.querySelector('#descripcionTrabajo').value,
      fecha_entrega: document.querySelector('#fechaEntrega').value,
      multa: document.querySelector('#multa').checked,
      pie_maquina: document.querySelector('#pieMaquina').checked,
      modulo: parseInt(document.querySelector('#modulo').value, 10),
      version: parseInt(document.querySelector('#version').value, 10),
    };

    const inputsSentidoRebobinado = document.querySelectorAll("input[name='sentidoRebobinado']");
    let inputChecked;
    for (let i = 0; i < inputsSentidoRebobinado.length; i++) {
      const input = inputsSentidoRebobinado[i];
      if (input.checked) {
        inputChecked = i + 1;
        break;
      }
    }
    body.current = {
      sentido_bobina: inputChecked,
      pleca: document.querySelector('#bodyBobinaSi').checked,
      acondicionamiento: document.querySelector('#bodyBobinasStreech').checked ? document.querySelector('#bodyBobinasStreech').value : document.querySelector('#bodyBobinasCarton').checked ? document.querySelector('#bodyBobinasCarton').value : document.querySelector('#bodyBobinasPallet').checked && document.querySelector('#bodyBobinasPallet').value,
      descripcion: document.querySelector('#bodyBobinasTextarea').value,
    };
    footer.current = {
      numerar: document.querySelector('#numerarSi').checked,
      sistema_numerado: parseInt(document.querySelector('#sistemaNumerado').value, 10),
      digitos: parseInt(document.querySelector('#digitos').value, 10),
      tinta_color: document.querySelector('#tintaColor').value,
      codigo_barra: document.querySelector('#bidimensional').value,
      primer_prefijo: document.querySelector('#prefijo').value,
      numero_inicial: parseInt(document.querySelector('#numeroInicial').value, 10),
      segundo_prefijo: document.querySelector('#prefijo2').value,
      numero_final: parseInt(document.querySelector('#numeroFinal').value, 10),
      digito_chequeo: document.querySelector('#chequeoSi').checked,
      descripcion: document.querySelector('#textareaNumeracion').value,
      diseño: document.querySelector('#textareaDiseño').value,
      impresion: document.querySelector('#textareaImpresion').value,
      terminacion: document.querySelector('#textareaTerminacion').value,
    };
    const headers = { method: 'POST',
      body: JSON.stringify({
        obj_cabecera: header.current,
        obj_bobina: body.current,
        obj_pie: footer.current,
      }),
      headers: {
        'authorization': localStorage.getItem('authorization'),
        'Content-Type': 'application/json',
      },
      credentials: 'same-origin',
    };

    fetch(`http://www.dynamicdoc.com.ar/hoja_de_ruta/${url}`, headers)
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.log(error);
      })
      .then((response) => {
        errores(response);
      });
  };

  return (
    <div className='my-4 grid grid-cols-2 gap-4'>
      <div className='p-2 border border-title-hr rounded'>
        <h4 className='text-center font-bold text-lg'>{errors.title || 'Lista de errores'}</h4>
        <ul>
          {errors.list.map((error, index) => {
            const { property, constraints } = error;
            const { isNotEmpty, max, min, isInt } = constraints;
            const descriptionList = [];
            descriptionList.push(isNotEmpty);
            descriptionList.push(max);
            descriptionList.push(min);
            descriptionList.push(isInt);
            return (
              <li key={index}>
                {`${property}: ${descriptionList.map((description) => {
                  if (!description) {
                    return null;
                  }
                  return ` ${description}`;
                })}`}
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <button onClick={handleSubmit} type='button' className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
          Enviar HR
        </button>
      </div>
    </div>
  );
};

export default SubmitHr;
