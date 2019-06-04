import React from 'react';
import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react';

const Maa =( props)=> {
  const filtteroi=props.lista
  if (filtteroi.length < 11 && filtteroi.length >1){
  return(
    <div>
    Country:{props.name}<br/>
    </div>
  )} else if (filtteroi.length===0){
    return (
      <div>Ei yhtään tuloksia</div>
    )
  } else if (filtteroi.length===1){
    return (
      <div>
        Country: {props.name}<br/>
        Capital:Capital:{props.capital}
      </div>
    )
  } else if (filtteroi.length >10  && filtteroi.length<250) {
    return null(
      <div>Liikaa tuloksia. Tarkenna hakuehtoja. </div>
    )
  } else {
    return null
  }
}



const App=()=> {

const [maat, lisaaMaa]=useState([])
const [hakuehto, asetaHakuehto]=useState('')


useEffect(() => {
    axios
        .get('https://restcountries.eu/rest/v2/all')
        .then(response => {
        lisaaMaa(response.data) 
    })
}, [])


const hae=(event)=>{
  const haku=event.target.value
  asetaHakuehto(haku)
  console.log(haku)
          }
const filtteroi=maat.filter(maa=>maa.name.includes(hakuehto))
console.log(filtteroi)
      

  

  const rows=() => filtteroi.map(maa=>
    <Maa lista={filtteroi} key={maa.id} name={maa.name} capital={maa.capital}
    />)


  return (
    <div>
      <form>
        Find countries: <input onChange={hae}/>
        </form>
        <div>{rows()}</div>


    </div>
  );
}

export default App
