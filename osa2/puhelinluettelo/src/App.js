import React, { useState } from 'react';
import Yhteystieto from './components/Yhteystieto';




const App = () => {

  const [ persons, setPersons] = React.useState([
      { nimi: 'Arto Hellas',
        numero:'0401234567',
        important:true
     },
      { nimi: 'Maija Mehiläinen',
        numero: '041-2345678',
        important:true
      }
    ]) 
    const [ newName, setNewName ] = React.useState('')
    const [ newNumber, setNewNumber ] = React.useState('')


    const lisaaNimi =(event)=>{
      let val=event.target.value
      for (let i=0; i<persons.length; i++){
        if (val===persons[i].nimi){
           alert( `${val} on jo puhelinluettelossa`)
           setNewName('')
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
               setNewNumber('')
               return false
            }else {
                setNewNumber(nro)
                return true
            }
               }}
     console.log(newNumber)


    const addNewContact =(event)=> {
            event.preventDefault()
                    const lisays= {
                         nimi:newName, 
                         numero:newNumber,
                         important:true}
            setPersons(persons.concat(lisays))
            setNewName('')
            setNewNumber('')
          } 

    const [naytaKaikki, aseta] = useState(true)

    const  yhteystiedot=naytaKaikki
    ? persons.filter(person=> person.important)
    : persons.filter(person=> person.important)

   
    const handleChange =(event)=> { 
        let haku=event.target.value
        var re = new RegExp(haku, "ig")
        console.log(re)
        for (let i=0; i<persons.length; i++){
           if (persons[i].nimi.search(re) > -1 || persons[i].numero.search(re) > -1){
            console.log(persons[i])
             persons[i].important=true
      
            } else {
             persons[i].important=false
            }       
         } 
         aseta(!naytaKaikki)
      }
      
    
    const rows=() =>yhteystiedot.map(yhteystieto => 
      <Yhteystieto 
        key={yhteystieto.nimi}
        nimi={yhteystieto.nimi}
        numero={yhteystieto.numero} />
     )

 
   return (
      <div>
        <h2>Puhelinluettelo</h2>
      <form >
        <div>Rajaa näytettäviä: <input onChange={handleChange}/><br/>
        </div></form>
        
        <form onSubmit={addNewContact}>
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
      )
  
  }

  export default App