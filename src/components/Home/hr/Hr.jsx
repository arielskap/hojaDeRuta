import React, { useState, useEffect, useRef } from 'react';
import HeaderHr from './HeaderHr';
import BodyHr from './BodyHr';
import FooterHr from './FooterHr';
import SubmitHr from './SubmitHr';
import BgDark from '../../BgDark';
import LoaderEllipsis from '../../loaders/LoaderEllipsis';

const Hr = () => {
  const isMounted = useRef(true);
  const controller = useRef(new AbortController());
  const [sendData, setSendData] = useState({
    response: { title: '',
      list: [],
    },
    loading: false,
    error: '',
  });

  const getData = () => {
    const data = {
      header: {},
      body: {},
      footer: {},
      hoja: {},
      colores: {},
    };

    data.header = {
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
    data.body = {
      sentido_bobina: inputChecked,
      pleca: bodyBobinaSiString,
      acondicionamiento: document.querySelector('#bodyBobinasStreech').checked ? document.querySelector('#bodyBobinasStreech').value : document.querySelector('#bodyBobinasCarton').checked ? document.querySelector('#bodyBobinasCarton').value : document.querySelector('#bodyBobinasPallet').checked && document.querySelector('#bodyBobinasPallet').value,
      descripcion: document.querySelector('#bodyBobinasTextarea').value,
    };

    data.footer = {
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

    data.hoja = {
      tipo_trascripcion: document.querySelector('#coloresSelectBody__total') ? document.querySelector('#coloresSelectBody__total').checked ? document.querySelector('#coloresSelectBody__total').value : document.querySelector('#coloresSelectBody__parcial') : 'No tiene',
      parte: document.querySelector('#coloresSelectBody__parte') ? parseInt(document.querySelector('#coloresSelectBody__parte').value, 10) : 1,
      tipo_papel: document.querySelector('#coloresSelectBody__tipoPapel').value,
      gramaje: document.querySelector('#coloresSelectBody__grs').value,
      medida: `${document.querySelector('#coloresSelectBody__medidaPrimera').value}x${document.querySelector('#coloresSelectBody__medidaSegunda').value}`,
      perforacion_perpendicular: parseInt(document.querySelector('#coloresSelectBody__perfoPerper').value, 10),
      perforacion_paralela: parseInt(document.querySelector('#coloresSelectBody__perfoParal').value, 10),
      perforacion_archivo: document.querySelector('#coloresSelectBody__perfoArchivo').checked,
    };

    data.colores = {
      id_front: 1,
      frente_dorso: document.querySelector('#F11').checked ? 'F' : 'D',
      tipo_color: document.querySelector('#colorBox__select11').value,
    };
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { signal } = controller.current;
    setSendData({ ...sendData, loading: true });
    const data = getData();

    const headers = { method: 'POST',
      signal,
      body: JSON.stringify({
        obj_cabecera: data.header,
        obj_bobina: data.body,
        obj_pie: data.footer,
        obj_hoja: data.hoja,
        obj_colores: data.colores,
      }),
      headers: {
        'authorization': localStorage.getItem('authorization'),
        'Content-Type': 'application/json',
      },
      credentials: 'same-origin',
    };

    fetch(`http://www.dynamicdoc.com.ar/hoja_de_ruta/${localStorage.getItem('url')}`, headers)
      .then((response) => {
        if (isMounted.current) {
          return response.json();
        }
      })
      .catch((error) => {
        if (isMounted.current) {
          console.log(`error: ${error}`);
          setSendData({
            ...sendData,
            loading: false,
            error,
          });
          return false;
        }
      })
      .then((response) => {
        if (response) {
          console.log(response);
          setSendData({
            ...sendData,
            response: {
              title: response.message,
              list: response.body,
            },
            loading: false,
            error: '',
          });
        }
      });
  };

  useEffect(() => {
    return () => {
      isMounted.current = false;
      controller.current.abort();
    };
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit} className='mx-4'>
        <HeaderHr />
        <BodyHr />
        <FooterHr />
        <SubmitHr response={sendData.response} errorData={sendData.error} />
      </form>
      <BgDark show={sendData.loading}>
        <div className='bg-white rounded p-1'>
          <LoaderEllipsis />
        </div>
      </BgDark>
    </>
  );
};

export default Hr;
