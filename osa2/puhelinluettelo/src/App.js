import React, { useState, useEffect } from 'react';
import Yhteystieto from './components/Yhteystieto';
import Lomake from './components/Lomake'
import axios from 'axios'



const App = () => {

  const [persons, setPersons]=useState([])

    useEffect(() => {
        axios
            .get('http://localhost:3001/persons')
            .then(response => {
            setPersons(response.data)  
        })
    }, [])

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

    const addNewContact =(event)=> {
            event.preventDefault()
                    const lisays= {
                         name:newName, 
                         numner:newNumber,
                         id:persons.length+1,
                         important:true}
    axios
    .post('http://localhost:3001/persons', lisays)
    .then(response => {
        setPersons(persons.concat(response.data))
           setNewName('')
           setNewNumber('')
    }) } 

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
      const poista =()=> {
        for (let a=0; a<yhteystiedot.length; a++){
          if (poista.id===yhteystiedot[a].name){
            const poisto=yhteystiedot[a].name
            alert(`Poistetaanko ${poisto}?`)
          }
        }
      }
    
    const rows=() =>yhteystiedot.map(yhteystieto => 
      
      <Yhteystieto 
        key={yhteystieto.id}
        nimi={yhteystieto.name}
        numero={yhteystieto.number} 
        poista={this.poista}/>
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