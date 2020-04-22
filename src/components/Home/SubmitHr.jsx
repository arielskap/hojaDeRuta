import React, { useRef, useState, useEffect } from 'react';

const SubmitHr = ({ url }) => {
  const header = useRef({});
  const body = useRef({});
  const footer = useRef({});
  const hoja = useRef({});
  const colores = useRef({});
  const controller = useRef(new AbortController());
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
    const { signal } = controller.current;

    header.current = {
      codigo_empresa: parseInt(document.querySelector('#headerHrCodigoEmpresa').value, 10),
      seguridad: document.querySelector('#seguridad').checked,
      pba: document.querySelector('#pbaImpresa').checked,
      type: document.querySelector('#nuevo').checked ? document.querySelector('#nuevo').value : document.querySelector('#conCambios').checked ? document.querySelector('#conCambios').value : document.querySelector('#repetExacta').checked && document.querySelector('#repetExacta').value,
      orden_anterior: parseInt(document.querySelector('#ordenAnterior').value, 10),
      material_entregado: parseInt(document.querySelector('#materialEntregado').value, 10),
      precosto: parseInt(document.querySelector('#precostoNro').value, 10),
      orden_compra: document.querySelector('#nroOc').value,
      orden_actual: parseInt(document.querySelector('#orden').value, 10),
      formula: document.querySelector('#formula').value,
      cantidad: parseInt(document.querySelector('#cantidad').value, 10),
      descripcion_trabajo: document.querySelector('#descripcionTrabajo').value,
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
    const bodyBobinaSiString = document.querySelector('#bodyBobinaSi').checked ? 'Si' : 'No';
    body.current = {
      sentido_bobina: inputChecked,
      pleca: bodyBobinaSiString,
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

    hoja.current = {
      tipo_trascripcion: document.querySelector('#coloresSelectBody__total') ? document.querySelector('#coloresSelectBody__total').checked ? document.querySelector('#coloresSelectBody__total').value : document.querySelector('#coloresSelectBody__parcial') : 'No tiene',
      parte: document.querySelector('#coloresSelectBody__parte') ? parseInt(document.querySelector('#coloresSelectBody__parte').value, 10) : 1,
      tipo_papel: document.querySelector('#coloresSelectBody__tipoPapel').value,
      gramaje: document.querySelector('#coloresSelectBody__grs').value,
      medida: `${document.querySelector('#coloresSelectBody__medidaPrimera').value}x${document.querySelector('#coloresSelectBody__medidaSegunda').value}`,
      perforacion_perpendicular: parseInt(document.querySelector('#coloresSelectBody__perfoPerper').value, 10),
      perforacion_paralela: parseInt(document.querySelector('#coloresSelectBody__perfoParal').value, 10),
      perforacion_archivo: document.querySelector('#coloresSelectBody__perfoArchivo').checked,
    };

    colores.current = {
      id_front: 1,
      frente_dorso: document.querySelector('#F11').checked ? 'F' : 'D',
      tipo_color: document.querySelector('#colorBox__select11').value,
    };

    const headers = { method: 'POST',
      signal,
      body: JSON.stringify({
        obj_cabecera: header.current,
        obj_bobina: body.current,
        obj_pie: footer.current,
        obj_hoja: hoja.current,
        obj_colores: colores.current,
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

  useEffect(() => {
    return () => {
      controller.current.abort();
    };
  }, []);

  return (
    <div className='my-4 grid grid-cols-2 gap-4'>
      <div className='p-2 border border-title-hr rounded'>
        <h4 className='text-center font-bold text-lg'>{errors.title || 'Lista de errores'}</h4>
        <ul>
          {errors.list.map((error, index) => {
            const { propiedad, errores } = error;
            return (
              <li key={index}>
                <span className='font-bold'>{`${propiedad}: `}</span>
                {errores.map((error) => `${error}, `)}
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
