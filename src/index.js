import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './fonts/futura/futura medium bt.ttf'
import './fonts/futura/Futura-Bold-Italic-font.ttf'
import './fonts/futura/Futura Book font.ttf'
import './fonts/futura/Futura Heavy font.ttf'
import './fonts/futura/Futura Bold font.ttf'
import './fonts/futura/Futura Light font.ttf'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


