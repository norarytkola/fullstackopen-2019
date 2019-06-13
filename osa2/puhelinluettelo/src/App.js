import React, { useState, useEffect } from 'react';
import Yhteystieto from './components/Yhteystieto';
import Lomake from './components/Lomake';
import luettelo from './services/puhelinluettelo';
import Info from './components/Info'
import Virhe from './components/Virhe'




const App = () => {

  const [persons, setPersons]=useState([])

    useEffect(() => {
        luettelo
         .getAll()
         .then(henkilo=>
          setPersons(henkilo))
    }, [])

    const [ newName, setNewName ] = React.useState('')
    const [ newNumber, setNewNumber ] = React.useState('')
    const [muokkaus, muokkaa]=React.useState(-1)
    const [vahvistus, vahvista]=React.useState(null)
    const [virhe, lisaavirhe]=React.useState(null)
    let index=-1


    const lisaaNimi =(event)=>{
      let val=event.target.value
      for (let i=0; i<persons.length; i++){
        if (val===persons[i].name){
           alert( `${val} on jo puhelinluettelossa.`)
           muokkaa(persons[i].id)        
            }
            setNewName(val)
          }}         

    const lisaanro =(event)=>{
      let nro=event.target.value
         for (let i=0; i<persons.length; i++){
            if (nro===persons[i].number){
               alert(`${nro} on jo puhelinluettelossa`)
               setNewNumber('')
            }else {
                setNewNumber(nro)
            }
               }}

    const addNewContact =(event)=> {
            event.preventDefault()
                    const lisays= {
                         name:newName, 
                         number:newNumber,
                         important:true}
            if (muokkaus>-1){
              window.confirm(`${newName} on jo luettelossa. Päivitetäänkö numero?`)
              luettelo.update(muokkaus, lisays)
              .then(muutos =>{
                aseta(!naytaKaikki)
                vahvista("Yhteystieto lisätty")
                setTimeout(() => {
                  vahvista(null)
                }, 5000)})
  
              .catch(error =>{
                lisaavirhe("Yhteystiedon päivittäminen ei onnistu")
                setTimeout(() => {
                  lisaavirhe(null)
                }, 5000)})
              muokkaa(-1)
            } else {
    luettelo
    .create(lisays)
    .then (lisays => 
      setPersons(persons.concat(lisays)))
      vahvista("Yhteystieto lisätty")
              setTimeout(() => {
                vahvista(null)
              }, 5000)
              }
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
      <div id="tiedot">
      <Yhteystieto 
      sanoma={vahvistus}
      index={index}
      yhteystiedot={yhteystiedot}
        key={yhteystieto.id}
        nimi={yhteystieto.name}
        numero={yhteystieto.number} 
        />
        </div>
     )

   return (
      <div>
        <Info message={vahvistus}/>
        <Virhe ilmoitus={virhe}/>
        <h2>Puhelinluettelo</h2>
        <form >
          <div>Rajaa näytettäviä: <input onChange={handleChange}/><br/>
          </div>
        </form>
       <Lomake  onSubmit={addNewContact} newName={newName} lisaaNimi={lisaaNimi} 
            newNumber ={newNumber} lisaanro={lisaanro}/>
         <h2>Numerot</h2>
        <div>{rows()}</div>
      </div>
   )
  }

  export default App