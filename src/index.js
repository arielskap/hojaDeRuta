import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import 'animate.css/animate.css';

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('app'),
  );
};

render();

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    console.clear();
    render();
  });
}
