import React, { useState, useEffect } from 'react';
import Yhteystieto from './components/Yhteystieto';
import Lomake from './components/Lomake'
import axios from 'axios'
import luettelo from './services/puhelinluettelo'




const App = (props) => {

  const [persons, setPersons]=useState([])

    useEffect(() => {
        luettelo
        .getAll()
        .then(response => {
            setPersons(response.data)  
        })
    }, [])

    const [ newName, setNewName ] = React.useState('')
    const [ newNumber, setNewNumber ] = React.useState('')
    const [muokkaus, muokkaa]=React.useState('')


    const lisaaNimi =(event)=>{
      let val=event.target.value
      for (let i=0; i<persons.length; i++){
        if (val===persons[i].name){
          console.log("moi")
           window.confirm( `${val} on jo puhelinluettelossa. Vaihdetaanko uusi numero henkilölle
           ${val}?`)
           muokkaa(i)
           setNewName(val)
           return false
            } else if (val !==persons[i].name) {
            setNewName(val)
              return true
            } 
            }
        }     

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

    const addNewContact =(event)=> {
            event.preventDefault()
                    const lisays= {
                         name:newName, 
                         number:newNumber,
                         important:true
                        }
    luettelo
    .create()
    .then(response => {
        setPersons(persons.concat(response.data))  
    })
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
        for (let i=0; i<persons.length; i++){
           if (persons[i].nimi.search(re) > -1 || persons[i].numero.search(re) > -1){
             persons[i].important=true     
           }else{
             persons[i].important=false
           }       
         } 
         aseta(!naytaKaikki)
      }
 
    
    const rows=() =>yhteystiedot.map(yhteystieto => 
      
      <Yhteystieto 

        key={yhteystieto.id}
        yhteystiedot={yhteystiedot} 
        nimi={yhteystieto.name}
        numero={yhteystieto.number}
        />
     )

   return (
      <div>
        <h2>Puhelinluettelo</h2>
      <form >
        <div>Rajaa näytettäviä: <input onChange={handleChange}/><br/>
        </div></form>
        
       <Lomake  onSubmit={addNewContact} newName={newName} lisaaNimi={lisaaNimi} 
            newNumber ={newNumber} lisaanro={lisaanro} />
      
         <h2>Numerot</h2>
        <div>{rows()}</div>
      </div>
      )
  }

  export default App