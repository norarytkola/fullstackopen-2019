import Maa from './Maa'
import React from 'react'
import Weather from './Weather'

const Tulokset =(props)=> {

  const filtteroi=props.filt

  const rows=() => filtteroi.map(maa=>
      <Maa lista={filtteroi} key={maa.id} name={maa.name} capital={maa.capital}
      popu={maa.population} 
      />)

      if (filtteroi.length===1){
        const paakaupunki=filtteroi[0].capital
        return(
          <>{rows()}
          <Weather capital={paakaupunki}/></>
        )
         
    }else if (filtteroi.length> 1 && filtteroi.length<11){
        console.log(filtteroi.length)
        return (
          <>{rows()}
          </>
          )
      }else if (filtteroi.length===0){
        return (<div>Ei hakutuloksia.</div>)
      } else if (filtteroi.length >10){
      return (<div>Liikaa hakutuloksia. Täsmennä hakua.</div>)
      }
    
  }

  export default Tulokset