import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import BodyBobinas from './BodyBobinas';
import BodyContinuos from './BodyContinuos';
import BodyHojas from './BodyHojas';
import BodyMultiset from './BodyMultiset';

const body = (nameHr, setUrl) => {
  let retorno;
  if (nameHr === 'bobinas') {
    //setUrl('bobina/create');
    retorno = <BodyBobinas />;
  } else if (nameHr === 'continuos') {
    retorno = <BodyContinuos />;
  } else if (nameHr === 'hojas') {
    retorno = <BodyHojas />;
  } else if (nameHr === 'multiset') {
    retorno = <BodyMultiset />;
  }

  return retorno;
};

const BodyHr = ({ setUrl }) => {
  const { nameHr } = useParams();
  const bodyTag = useRef(body(nameHr, setUrl));

  return bodyTag.current;
};

export default BodyHr;
