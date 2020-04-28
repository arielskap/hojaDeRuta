import { useEffect, useState } from 'react';

const useNumerado = () => {
  const [esNumerado, setEsNumerado] = useState(false);
  useEffect(() => {
    if (document.querySelector('#numerarSi').checked) {
      document.querySelector('.numerarBody').classList.add('grid', 'grid-cols-12', 'gap-1', 'text-xxs');
      document.querySelector('.numerarBody').classList.remove('flex', 'items-center', 'justify-center');
      document.querySelectorAll('.bodyNumerar_inputs').forEach((input) => {
        input.classList.add('text-xxs');
      });
    } else {
      document.querySelector('.numerarBody').classList.remove('grid', 'grid-cols-12', 'gap-1', 'text-xxs');
      document.querySelector('.numerarBody').classList.add('flex', 'items-center', 'justify-center');
      document.querySelectorAll('.bodyNumerar_inputs').forEach((input) => {
        input.classList.remove('text-xxs');
      });
    }
  }, [esNumerado]);
  return { esNumerado, setEsNumerado };
};

export default useNumerado;
