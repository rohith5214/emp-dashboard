import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Editshare from './ContextShare/Editshare';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Editshare>
    <App />
    </Editshare>
    </BrowserRouter>
  </React.StrictMode>
);

