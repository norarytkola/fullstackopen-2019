import React from 'react';
import axios from 'axios';
import {useState} from 'react'


const Yhteystieto=(props) => {
  const yhteystiedot=props.yhteystiedot
  const baseUrl = 'http://localhost:3001/persons'
  let index=useState(-1)
  const poista =()=> {
    for (let a=0; a<yhteystiedot.length; a++){
      if (yhteystiedot[a].name===props.nimi){
        console.log(yhteystiedot[a].name)
        const poisto=yhteystiedot[a].name
        index=a
       window.confirm(`Poistetaanko ${poisto}?`) 
      }
      axios.delete(`http://localhost:3001/persons/${index}`)
      .then(response => {
        yhteystiedot.splice({index})
      })
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
