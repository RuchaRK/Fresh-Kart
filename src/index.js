import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {makeServer} from './server';
import App from './App';

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
