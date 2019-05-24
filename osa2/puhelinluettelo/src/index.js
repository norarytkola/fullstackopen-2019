import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


const Yhteystieto=(props) => {
    return (
        <>
        
        Nimi: {props.nimi}<br/>
        Puhelinnumero: {props.numero}
        </>
    )
}



ReactDOM.render(<App />, document.getElementById('root'));