import React, { useState } from 'react';
import Filtteri from './components/Filtteri';
import Yhteystieto from './components/Yhteystieto'





const App = () => {
    const [ persons, setPersons] = useState([
      { nimi: 'Arto Hellas',
        numero:'0401234567'
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
            }
            
            setPersons(persons.concat(lisays))
          }} 
     const lista=[...persons] 
     
     const rows = () =>lista.map(yhteystieto =>
            <Yhteystieto 
              key={yhteystieto.id}
              nimi={yhteystieto.nimi}
              numero={yhteystieto.numero} 
              />)

   
      const handleChange=(event)=>{  
        const haku=event.target.value
         if (haku !== "") {
            lista.filter( haku)
              }
            }
      <div>
        <h2>Puhelinluettelo</h2>
        <div>Rajaa näytettäviä: <input onChange={handleChange()}/><br/>
        </div>
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
        <div>{rows()}</div>

      </div>
  
  }

  export default App