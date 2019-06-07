import React from 'react';
import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react';
import Tulokset from './components/Tulokset';

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

const [saa, lisaaSaa]=useState(["Helsinki"])
useEffect(() => {
  axios
  .get('http://api.apixu.com/v1/current.json?key=c1272d6104cc4900aa9182018190706&q={filtteroi[0].capital}')
  .then(response => {
    lisaaSaa(response.data) 
    })
    }, [])
    


  return (
    <div>
      <form>
        Find countries: <input onChange={hae}/>
        </form>
        <div><Tulokset filt={filtteroi} saa={saa.current.temp_c}/></div>



    </div>
  );
}

export default App
