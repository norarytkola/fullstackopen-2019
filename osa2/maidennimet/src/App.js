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
          }
const filtteroi=maat.filter(maa=>maa.name.includes(hakuehto))

  return (
    <div>
      <form>
        Find countries: <input onChange={hae}/>
        </form>
        <div><Tulokset filt={filtteroi}  />
        </div>
    </div>
  );
}

export default App
