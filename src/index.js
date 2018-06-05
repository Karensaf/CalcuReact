// Dependencias
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom' //   Es la q nos va a ayudar a hacer las rutas

// Components
//import App from './components/App';


// Routes

import AppRoutes from './routes'

// Assets
// import App from './copmponentr/App';
import './index.css';

import registerServiceWorker from './registerServiceWorker'; 

ReactDOM.render(
    <BrowserRouter>
        <AppRoutes />
    </BrowserRouter>,
 document.getElementById('root'));
 
 // la siguente linea es para levantar el sevidor
registerServiceWorker();
