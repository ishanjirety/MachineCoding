import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Product } from './Context/Product'
ReactDOM.render(
  <React.StrictMode>
    <Product>
      <App />
    </Product>
  </React.StrictMode>,
  document.getElementById('root')
);
