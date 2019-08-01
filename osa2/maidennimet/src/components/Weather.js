import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'

const Weather =(props)=>{

let kaupunki=props.capital
console.log(kaupunki)
const [kuvat, lisaakuva]=useState('')
const [saa, lisaaSaa]=useState([])
useEffect(() => {
  axios
  .get(`http://api.apixu.com/v1/current.json?key=c1272d6104cc4900aa9182018190706&q=${kaupunki}`)
  .then(response => {
     const data=(response.data) 
     lisaaSaa(data.current)
     })
   }, [])
   console.log(saa)

   

return(
  <>Sää: {saa.temp_c} astetta.
 </>
)
}


export default Weather
