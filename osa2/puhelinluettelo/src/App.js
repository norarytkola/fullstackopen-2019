import React, { useState } from 'react';
import Yhteystieto from './components/Yhteystieto'
import Filtteri from './components/Filtteri';




const App = () => {

  const [ persons, setPersons] = useState([
      { nimi: 'Arto Hellas',
        numero:'0401234567',
        important:true
     },
      { nimi: 'Maija Mehiläinen',
        numero: '041-2345678',
        important:true
      }
    ]) 
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const lista=[...persons] 

    const lisaaNimi =(event)=>{
      let val=event.target.value
      for (let i=0; i<persons.length; i++){
        if (val===persons[i].nimi){
           alert( `${val} on jo puhelinluettelossa`)
           return false
            } else {
              setNewName(val)
              return true
            }}}         

    const lisaanro =(event)=>{
      let nro=event.target.value
         for (let i=0; i<persons.length; i++){
            if (nro===persons[i].numero){
               alert(`${nro} on jo puhelinluettelossa`)
               return false
               } else {
                 setNewNumber(nro)
                 return true
               }}}
 
    const addNewName =(event)=> {
            event.preventDefault()
            if (lisaaNimi===true &&lisaanro===true){
            const lisays= {
              nimi:newName, 
              numero:newNumber,
              important:true
            }  
            setPersons(persons.concat(lisays))
          }} 
   
    const handleChange =(event)=> { 
        let haku=event.target.value
        var re = new RegExp(haku, "ig")
        for (let i=0; i<lista.length; i++){
           if (lista[i].nimi.search(re) > -1 || lista[i].numero.search(re) > -1){
             lista[i].important=true
            } else {
             lista[i].important = false 
            }
         }

         yhteystiedot = lista.filter(yhteystieto=> yhteystieto.important===true)
         
      }
    
  
  
    let yhteystiedot = lista.filter(yhteystieto=> yhteystieto.important===true)
 

 
   return (
      <div>
        <h2>Puhelinluettelo</h2>
      <form>
        <div>Rajaa näytettäviä: <input onChange={handleChange}/><br/>
        </div></form>
        
        <form onSubmit={addNewName}>
          <div>
            nimi:<br/> <input value={newName} onChange={lisaaNimi} />
          </div>
            <div>
             puhelinnumero:<br/> <input value={newNumber} onChange={lisaanro} />
            </div>
            <div>
                <button type="submit">lisää</button>
        </div>
      </form>
      
         <h2>Numerot</h2>
        <div>{Filtteri(yhteystiedot)}</div>

      </div>
      )
  
  }

  export default App