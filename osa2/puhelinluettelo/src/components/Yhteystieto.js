import React from 'react';


const Yhteystieto=(props) => {
    
    return (
        <div>
          Nimi: {props.nimi}   
          Puhelinnumero: {props.numero}  
          <button id={props.nimi} onClick={props.poista}>Poista</button>
        </div>
    )
    
}

export default Yhteystieto;
