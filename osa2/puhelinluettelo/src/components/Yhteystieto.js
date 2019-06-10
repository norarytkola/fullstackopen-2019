import React from 'react';
import axios from 'axios';
import {useState} from 'react'


const Yhteystieto=(props) => {
  const yhteystiedot=props.yhteystiedot
  let index=useState(-1)
  const poista =()=> {
    for (let a=0; a<yhteystiedot.length; a++){
      if (yhteystiedot[a].name===props.nimi){
        
        const poisto=yhteystiedot[a].name
        index=a
       window.confirm(`Poistetaanko ${poisto}?`) 
      }
      if (index > -1){
      axios.delete(`http://localhost:3001/persons/${yhteystiedot[a].id}`)
      .then(response => {
       yhteystiedot.filter(y => y.id !==yhteystiedot[a].id )
      })
  }
}}
    
    return (
        <div key={props.id}>
          Nimi: {props.nimi}   
          Puhelinnumero: {props.numero}  
          <button id={props.nimi} onClick={poista}>Poista</button>
          </div>
    )   
}

export default Yhteystieto;
