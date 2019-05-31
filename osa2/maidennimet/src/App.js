import React from 'react';
import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react';

const Maa =(props)=> {
  return(
    <div>
    Country:{props.name}<br/>
    Capital:{props.capital}
    </div>
  )
}


const App=()=> {

const [maat, lisaaMaa]=useState([])
const [nayta, lisaaNayta]=useState([])


useEffect(() => {
    axios
        .get('https://restcountries.eu/rest/v2/all')
        .then(response => {
        lisaaMaa(response.data) 
    })
}, [])



const hae=(event)=>{
 const haku=event.target.value
 var re = new RegExp(haku, "ig")
 console.log(re)
    for (let i=0; i<maat.length; i++){
        if (maat[i].name.search(re)> -1){
          const lisays = {
             name:maat[i].name,
             capital:maat[i].capital}
             lisaaNayta(nayta.concat(lisays))
          }}
        for (let i=0; i<nayta.length; i++){
          if (nayta[i].name.search(re)< -1){
            nayta.splice(nayta[i])
            }}}


  const rows=() => nayta.map(maa=>
    <Maa key={maa.name} name={maa.name} capital={maa.capital}
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
