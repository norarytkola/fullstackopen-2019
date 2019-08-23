
import axios from 'axios';

const baseUrl='/api/persons'

const getAll = () => {
    const request= axios.get(baseUrl)
    return request.then(response => {
        return response.data
      })
  }

const create = lisays => {
    const request= axios.post(baseUrl, lisays)
    return request.then(response => response.data)
    .catch(error=>{
      return("Nimen täytyy olla uniikki")
    })
  }
  
  const update = (muokkaus, newNumber) => {
    const request= axios.put(`${baseUrl}/${muokkaus}`, newNumber)
    return request.then(response => response.data)
  }
  const poistacontact = index =>{
    axios.delete(`${baseUrl}/${index}`)
    .then(res => console.log(res.data));
      
  }
  
  export default {
      create:create,
      update:update,
      getAll:getAll,
      poistacontact:poistacontact
  }