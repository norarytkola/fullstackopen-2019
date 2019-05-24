import React, { useState } from 'react';
import Yhteystieto from './components/Yhteystieto';





const App = () => {
    const [ persons, setPersons] = useState([
      { nimi: 'Arto Hellas',
        numero:'0401234567',
     },
      { nimi: 'Maija Mehiläinen',
        numero: '041-2345678'
      }
    ]) 
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')

    const lisaaNimi =(event)=>{
      let val=event.target.value
      for (let i=0; i<persons.length; i++){
        if (val===persons[i].nimi){
           alert("(${val}) on jo puhelinluettelossa")
           return false
            } else {
              setNewName(val)
              return true
            }}}
            console.log(newName, newNumber)

    const lisaanro =(event)=>{
      let nro=event.target.value
         for (let i=0; i<persons.length; i++){
            if (nro===persons[i].numero){
               alert("${nro} on jo puhelinluettelossa")
               return false
               } else {
                 setNewNumber(nro)
                 return true
               }}}

    const kopio=[...persons]
    const rows = () => kopio.map(yhteystieto =>
        <Yhteystieto 
          key={yhteystieto.id}
          nimi={yhteystieto.nimi}
          numero={yhteystieto.numero} 
          />)

     const addNewName =(event)=> {
            event.preventDefault()
            if (lisaaNimi===true &&lisaanro===true){
            const lisays= {
              nimi:newName, 
              numero:newNumber
            }
            setPersons(persons.concat(lisays))
          }} 
        
    
  
    return (
      <div>
        <h2>Puhelinluettelo</h2>
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
         {rows()}

      </div>
    )
  
  }

  export default App