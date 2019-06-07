import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'


const Maa =( props)=> {
    const filtteroi=props.lista
    let index=useState('')
    const nayta=()=>{
      for (let a=0; a<filtteroi.length; a++){
          if (filtteroi[a].name===props.name){
              index=a
    }}
}
const kuva=filtteroi[0].flag

     
    
    const kielet=()=>filtteroi[0].languages.map(kieli =>
        <li key={kieli.name}>{kieli.name}</li>)

    
   
    if (filtteroi.length < 11 && filtteroi.length >1){
    return(
      <div>
      Country:{props.name} <button onClick={nayta}>Show</button><br/>
      </div>
    )
    } else if (filtteroi.length===1){
    
      return (
        <div>
          <h1> {props.name} </h1><br/>
          Capital:{props.capital}<br/>
          Population:{props.popu}
          Languages:<ul>{kielet()}</ul>
          <img src={kuva} width='150em'/>
          Weather:{props.saa}
            </div>
            )
    }else if (index > -1){
        return (
            <div>
            <h1> {props[index].name} </h1><br/>
          Capital:{props[index].capital}<br/>
          Population:{props[index].popu}<br/>
          Weather: {props.saa}<br/>
          Languages:<ul>{kielet()}</ul>
          <img src={kuva} width='150em'/>
          
          </div>
            )
        } else {
      return null
    }
  }

  export default Maa