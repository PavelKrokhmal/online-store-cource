import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import AppRouter from './components/AppRouter'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRouter /> 
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
