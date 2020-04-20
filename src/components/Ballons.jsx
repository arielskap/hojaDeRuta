import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import '../assets/styles/ballons.css';

const Ballons = ({ isHappy }) => {
  if (!isHappy) {
    return null;
  }

  useEffect(() => {
    function random(num) {
      return Math.floor(Math.random() * num);
    }

    function getRandomStyles() {
      const r = random(255);
      const g = random(255);
      const b = random(255);
      const mt = random(200);
      const ml = random(50);
      const dur = random(5) + 5;
      return `
      background-color: rgba(${r},${g},${b},0.7);
      color: rgba(${r},${g},${b},0.7);
      box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
      margin: ${mt}px 0 0 ${ml}px;
      animation: float ${dur}s ease-in infinite
      `;
    }

    function createBalloons(num) {
      const balloonContainer = document.getElementById('balloon-container');
      for (let i = num; i > 0; i--) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.cssText = getRandomStyles(); balloonContainer.append(balloon);
      }
    }
    createBalloons(100);
  }, []);

  return ReactDOM.createPortal(
    <div className='fadeIn faster' id='balloon-container' />,
    document.getElementById('ballon'),
  );
};

export default Ballons;
