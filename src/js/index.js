import React from 'react';
import ReactDOM from 'react-dom';
import Home from './component/home';
import SecondsCounter from './component/secondsCounter';
import '../styles/index.css'


const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(
    <div>
        <Home />
        <h1>Contador de Segundos</h1>
        <SecondsCounter seconds={0} /> 
    </div>
);


