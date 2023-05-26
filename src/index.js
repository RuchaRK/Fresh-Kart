import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {makeServer} from './server';
import App from './App';
import {AuthContextProvider} from './Context/AuthContext';
import {CounterContextProvider} from './Context/CounterContext';
import {ProductContextProvider} from './Context/ProductContext';

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
        <CounterContextProvider>
          <ProductContextProvider>
            <App />
          </ProductContextProvider>
        </CounterContextProvider>
      </AuthContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
