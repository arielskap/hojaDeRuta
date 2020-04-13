import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import BodyBobinas from './BodyBobinas';
import BodyContinuos from './BodyContinuos';
import BodyHojas from './BodyHojas';

const body = (nameHr) => {
  let retorno;
  if (nameHr === 'bobinas') {
    retorno = <BodyBobinas />;
  } else if (nameHr === 'continuos') {
    retorno = <BodyContinuos />;
  } else if (nameHr === 'hojas') {
    retorno = <BodyHojas />;
  } else if (nameHr === 'multiset') {
    retorno = <div>{nameHr}</div>;
  }

  return retorno;
};

const BodyHr = () => {
  const { nameHr } = useParams();
  const bodyTag = useRef(body(nameHr));

  return bodyTag.current;
};

export default BodyHr;
