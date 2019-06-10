
import axios from 'axios';

const baseUrl='http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseUrl)
  }

const create = lisays => {
    const request= axios.post(baseUrl, lisays)
    return request.then(response => response.data)

  }
  
  const update = (muokkaus, newNumber) => {
    return axios.put(`${baseUrl}/${muokkaus}`, newNumber)
  }
  
  export default {
      create:create,
      update:update,
      getAll:getAll
  }