
import axios from 'axios';

const baseUrl='http://localhost:3001/persons'

const getAll = () => {
    const request= axios.get(baseUrl)
    return request.then(response => {
        return response.data
      })
  }

const create = lisays => {
    const request= axios.post(baseUrl, lisays)
    return request.then(response => response.data)
  }
  
  const update = (muokkaus, newNumber) => {    const request= axios.put(`${baseUrl}/${muokkaus}`, newNumber)
    return request.then(response => response.data)
  }
  const poistacontact = index =>{
    console.log(index)
    axios.delete(`${baseUrl}/${index}`)
    .then(res => console.log(res.data));
      
  }
  
  export default {
      create:create,
      update:update,
      getAll:getAll,
      poistacontact:poistacontact
  }