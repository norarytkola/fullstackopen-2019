import React from 'react';
import axios from'axios'





const Yhteystieto=(props) => {

  const yhteystiedot=props.yhteystiedot
  const poista =()=> {
    for (let a=0; a<yhteystiedot.length; a++){
      if (yhteystiedot[a].name===props.nimi){
        const poisto=yhteystiedot[a].name
        const id=yhteystiedot[a].id
       window.confirm(`Poistetaanko ${poisto}?`) 
       axios
       .delete(`http://localhost:3001/persons/${id}`)
    .then(res => console.log(res.data));
    yhteystiedot.filter(per => per.id !== id)

      }
  }}

  return (
    <div >
      Nimi: {props.nimi}  <br/>     
      Puhelinnumero: {props.numero}  <br/>
      <button  onClick={poista}>Poista</button>
    </div>
)

}
export default Yhteystieto;
