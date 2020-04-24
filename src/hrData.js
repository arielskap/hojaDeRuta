const hrData = (isHr) => {
  let hoja;

  const calcColores = (parte) => {
    const colores = [];
    for (let i = 1; i <= document.querySelectorAll(`.colorBox${parte}`).length; i++) {
      colores.push({
        id_front: document.querySelector(`.parteId${i}${parte}`),
        frente_dorso: {
          f: document.querySelector(`#F${i}${parte}`),
          d: document.querySelector(`#D${i}${parte}`),
        },
        tipo_color: document.querySelector(`#colorBox__select${i}${parte}`),
      });
    }
    return colores;
  };

  const hojaBody = (i) => {
    return {
      tipo_trascripcion: {
        total: document.querySelector(`#coloresSelectBody__total${i}`),
        parcial: document.querySelector(`#coloresSelectBody__parcial${i}`),
      },
      parte: document.querySelector(`#coloresSelectBody__parte${i}`),
      tipo_papel: document.querySelector(`#coloresSelectBody__tipoPapel${i}`),
      gramaje: document.querySelector(`#coloresSelectBody__grs${i}`),
      medida: {
        primera: document.querySelector(`#coloresSelectBody__medidaPrimera${i}`),
        segunda: document.querySelector(`#coloresSelectBody__medidaSegunda${i}`),
      },
      perforacion_perpendicular: document.querySelector(`#coloresSelectBody__perfoPerper${i}`),
      perforacion_paralela: document.querySelector(`#coloresSelectBody__perfoParal${i}`),
      perforacion_archivo: document.querySelector(`#coloresSelectBody__perfoArchivo${i}`),
      colores: calcColores(i),
    };
  };

  if (isHr === 'bobinas') {
    hoja = hojaBody(1);
  } else {
    hoja = [];
    for (let i = 1; i <= document.querySelectorAll('.ColoresSelectBody').length; i++) {
      hoja.push(hojaBody(i));
    }
  }

  const hr = {
    header: {
      codigo_empresa: document.querySelector('#headerHrCodigoEmpresa'),
      seguridad: document.querySelector('#seguridad'),
      pba: document.querySelector('#pbaImpresa'),
      type: {
        nuevo: document.querySelector('#nuevo'),
        conCambios: document.querySelector('#conCambios'),
        repExacta: document.querySelector('#repetExacta'),
      },
      orden_anterior: document.querySelector('#ordenAnterior'),
      material_entregado: document.querySelector('#materialEntregado'),
      precosto: document.querySelector('#precostoNro'),
      orden_compra: document.querySelector('#nroOc'),
      orden_actual: document.querySelector('#orden'),
      formula: document.querySelector('#formula'),
      cantidad: document.querySelector('#cantidad'),
      descripcion_trabajo: document.querySelector('#descripcionTrabajo'),
      fecha_entrega: document.querySelector('#fechaEntrega'),
      multa: document.querySelector('#multa'),
      pie_maquina: document.querySelector('#pieMaquina'),
      modulo: document.querySelector('#modulo'),
      version: document.querySelector('#version'),
    },
    body: {
      hoja,
      sentido_bobina: document.querySelectorAll("input[name='sentidoRebobinado']"),
      pleca: document.querySelector('#bodyBobinaSi'),
      acondicionamiento: {
        streech: document.querySelector('#bodyBobinasStreech'),
        carton: document.querySelector('#bodyBobinasCarton'),
        pallet: document.querySelector('#bodyBobinasPallet'),
      },
      descripcion: document.querySelector('#bodyBobinasTextarea'),
    },
    footer: {
      numerar: document.querySelector('#numerarSi'),
      sistema_numerado: document.querySelector('#sistemaNumerado'),
      digitos: document.querySelector('#digitos'),
      tinta_color: document.querySelector('#tintaColor'),
      codigo_barra: document.querySelector('#bidimensional'),
      primer_prefijo: document.querySelector('#prefijo'),
      numero_inicial: document.querySelector('#numeroInicial'),
      segundo_prefijo: document.querySelector('#prefijo2'),
      numero_final: document.querySelector('#numeroFinal'),
      digito_chequeo: document.querySelector('#chequeoSi'),
      descripcion: document.querySelector('#textareaNumeracion'),
      diseño: document.querySelector('#textareaDiseño'),
      impresion: document.querySelector('#textareaImpresion'),
      terminacion: document.querySelector('#textareaTerminacion'),
    },
  };

  return {
    getData: () => {
      const data = {
        header: {},
        body: {},
        footer: {},
        hoja: {},
        colores: {},
      };

      const { header, body, footer } = hr;

      data.header = {
        codigo_empresa: parseInt(header.codigo_empresa.value, 10),
        seguridad: header.seguridad.checked,
        pba: header.pba.checked,
        type: header.type.nuevo.checked ? header.type.nuevo.value : header.type.conCambios.checked ? header.type.conCambios.value : header.type.repExacta.checked && header.type.repExacta.value,
        orden_anterior: parseInt(header.orden_anterior.value, 10),
        material_entregado: parseInt(header.material_entregado.value, 10),
        precosto: parseInt(header.precosto.value, 10),
        orden_compra: header.orden_compra.value,
        orden_actual: parseInt(header.orden_actual.value, 10),
        formula: header.formula.value,
        cantidad: parseInt(header.cantidad.value, 10),
        descripcion_trabajo: header.descripcion_trabajo.value,
        fecha_entrega: header.fecha_entrega.value,
        multa: header.multa.checked,
        pie_maquina: header.pie_maquina.checked,
        modulo: parseInt(header.modulo.value, 10),
        version: parseInt(header.version.value, 10),
      };

      let inputChecked;
      for (let i = 0; i < body.sentido_bobina.length; i++) {
        const input = body.sentido_bobina[i];
        if (input.checked) {
          inputChecked = i + 1;
          break;
        }
      }
      const bodyBobinaSiString = body.pleca.checked ? 'Si' : 'No';
      data.body = {
        sentido_bobina: inputChecked,
        pleca: bodyBobinaSiString,
        acondicionamiento: body.acondicionamiento.streech.checked ? body.acondicionamiento.streech.value : body.acondicionamiento.carton.checked ? body.acondicionamiento.carton.value : body.acondicionamiento.pallet.checked && body.acondicionamiento.pallet.value,
        descripcion: body.descripcion.value,
      };

      data.footer = {
        numerar: footer.numerar.checked,
        sistema_numerado: parseInt(footer.sistema_numerado.value, 10),
        digitos: parseInt(footer.digitos.value, 10),
        tinta_color: footer.tinta_color.value,
        codigo_barra: footer.codigo_barra.value,
        primer_prefijo: footer.primer_prefijo.value,
        numero_inicial: parseInt(footer.numero_inicial.value, 10),
        segundo_prefijo: footer.segundo_prefijo.value,
        numero_final: parseInt(footer.numero_final.value, 10),
        digito_chequeo: footer.digito_chequeo.checked,
        descripcion: footer.descripcion.value,
        diseño: footer.diseño.value,
        impresion: footer.impresion.value,
        terminacion: footer.terminacion.value,
      };

      const getHojaColors = () => {
        let hojaArray;
        const coloresArray = [];
        const setHoja = () => {
          return {
            tipo_trascripcion: hoja.tipo_trascripcion.total ? hoja.tipo_trascripcion.total.checked ? hoja.tipo_trascripcion.total.value : hoja.tipo_trascripcion.parcial : 'No tiene',
            parte: hoja.parte ? parseInt(hoja.parte.value, 10) : 1,
            tipo_papel: hoja.tipo_papel.value,
            gramaje: hoja.gramaje.value,
            medida: `${hoja.medida.primera.value}x${hoja.medida.segunda.value}`,
            perforacion_perpendicular: parseInt(hoja.perforacion_perpendicular.value, 10),
            perforacion_paralela: parseInt(hoja.perforacion_paralela.value, 10),
            perforacion_archivo: hoja.perforacion_archivo.checked,
          };
        };
        const setColors = (colores) => {
          coloresArray.push({
            id_front: colores.id_front.innerHTML,
            frente_dorso: colores.frente_dorso.f.checked ? 'F' : 'D',
            tipo_color: colores.tipo_color.value,
          });
        };

        if (isHr === 'bobinas') {
          hojaArray = setHoja(body.hoja);
          for (let j = 0; j < body.hoja.colores.length; j++) {
            const colores = body.hoja.colores[j];
            setColors(colores);
          }
        } else {
          hojaArray = [];
          for (let i = 0; i < body.hoja.length; i++) {
            const hoja = body.hoja[i];
            hojaArray.push(setHoja(hoja));
            for (let j = 0; j < body.hoja[i].colores.length; j++) {
              const colores = body.hoja[i].colores[j];
              setColors(colores);
            }
          }
        }

        return { hojaArray, coloresArray };
      };

      data.hoja = getHojaColors().hojaArray;

      data.colores = getHojaColors().coloresArray;
      return data;
    },
    setData: (data) => {
      const { cabecera, pie } = data;
      const { header, body, body: { hoja }, footer } = hr;
      let parseFechaEntrega = new Date(cabecera.fechaEntrega);
      const month = parseFechaEntrega.getUTCMonth() + 1;
      const day = parseFechaEntrega.getUTCDate();
      parseFechaEntrega = `${parseFechaEntrega.getUTCFullYear()}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`;

      header.cantidad.value = cabecera.cantidad;
      header.codigo_empresa.value = data.empresa.codigoEmpresa;
      header.descripcion_trabajo.value = cabecera.descripcionTrabajo;
      header.fecha_entrega.value = parseFechaEntrega;
      header.formula.value = cabecera.formula;
      header.material_entregado.value = cabecera.materialEntregado;
      header.modulo.value = cabecera.modulo;
      header.multa.checked = cabecera.multa === 1;
      header.orden_actual.value = cabecera.ordenActual;
      header.orden_anterior.value = cabecera.ordenAnterior;
      header.orden_compra.value = cabecera.ordenCompra;
      header.pba.checked = cabecera.pba === 1;
      header.pie_maquina.checked = cabecera.pieMaquina === 1;
      header.precosto.value = cabecera.precosto;
      header.seguridad.value = cabecera.seguridad;
      header.type.value = cabecera.tipo;
      header.version.value = cabecera.version;

      //body.acondicionamiento.value =
      body.descripcion.value = data.descripcion;
      body.pleca.checked = data.pleca;
      body.sentido_bobina[data.sentidoBobina - 1].checked = true;

      const setHoja = (hojaData, hojaLocal) => {
        const hojaSetHoja = hojaLocal;
        hojaSetHoja.gramaje.value = hojaData.gramaje;
        //body.hojaLocal.medida =
        //body.hojaLocal.parte. = hoja.parte;
        hojaSetHoja.perforacion_archivo.value = hojaData.perforacionArchivo;
        hojaSetHoja.perforacion_paralela.value = hojaData.perforacionParalela;
        hojaSetHoja.perforacion_perpendicular.value = hojaData.perforacionPerpendicular;
        //hojaLocal.tipo_papel
        //hojaLocal.tipo_trascripcion.value = hojaData.tipoTrascripcion;
        for (let j = 0; j < hojaData.colores.length; j++) {
          const colorData = hojaData.colores[j];
          hojaSetHoja.colores[j].frente_dorso = colorData.frenteDorso === 'f';
          //tipoColor
        }
      };

      let hojaData;
      let hojaLocal;
      if (isHr === 'bobinas') {
        hojaData = data.hoja;
        hojaLocal = hoja;
        setHoja(hojaData, hojaLocal);
      } else {
        for (let i = 0; i < hojaData.length; i++) {
          hojaData = hojaData[i];
          hojaLocal = hoja[i];
          setHoja(hojaData, hojaLocal);
        }
      }

      footer.codigo_barra.value = pie.codigoBarra;
      footer.descripcion.value = pie.descripcion;
      footer.digito_chequeo.checked = pie.digitoChequeo === 1;
      footer.digitos.value = pie.digitos;
      footer.diseño.value = pie.diseño;
      footer.impresion.value = pie.impresion;
      footer.numerar.checked = pie.numerar === 1;
      footer.numero_final.value = pie.numeroFinal;
      footer.numero_inicial.value = pie.numeroInicial;
      footer.primer_prefijo.value = pie.primerPrefijo;
      footer.segundo_prefijo.value = pie.segundoPrefijo;
      footer.sistema_numerado.value = pie.sistemaNumerado;
      footer.terminacion.value = pie.terminacion;
      footer.tinta_color.value = pie.tintaColor;
    },
  };
};

export default hrData;
