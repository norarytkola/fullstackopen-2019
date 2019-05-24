import React, { useState } from 'react';
import  { Yhteystieto } from "react";



const App = () => {
    const [ persons, setPersons] = useState([
      { nimi: 'Arto Hellas',
        numero:'0401234567'
     }

    ]) 
    console.log(persons)
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')

    const lisaaLuetteloon =(event)=> {
        for (let i=0; i<persons.length; i++){
             if (newName===persons[i].nimi){
                alert("${newName[i]} on jo puhelinluettelossa")
            } else if (newNumber===persons[i].numero){
            return(
                alert(" Numero on jo puhelinluettelossa"))
            }
         } 
        setPersons(newName, newNumber)
    }
    
    const addNewName =(event)=> {
        event.preventDefault()
    }
    const rows = () => persons.map(yhteystieto =>
        <Yhteystieto
          key={yhteystieto.nimi}
          nimi={yhteystieto.nimi}
          numero={yhteystieto.numero} 
        />)
        
    
  
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={addNewName}>
          <div>
            nimi:<br/> <input value={newName} />
          </div>
            <div>
             puhelinnumero:<br/> <input value={newNumber}  />
            </div>
            <div>
                <button type="submit" onClick={lisaaLuetteloon()}>lisää</button>
        </div>
      </form>
         <h2>Numerot</h2>
         {rows()}

      </div>
    )
  
  }

  export default App