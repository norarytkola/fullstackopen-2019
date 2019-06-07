import Maa from './Maa'
import React from 'react'

const Tulokset =(props)=> {
    const filtteroi=props.filt
    const rows=() => filtteroi.map(maa=>
      <Maa lista={filtteroi} key={maa.id} name={maa.name} capital={maa.capital}
      popu={maa.population} saa={props.saa}
      />)
      if (filtteroi.length> 0 && filtteroi.length<11){
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