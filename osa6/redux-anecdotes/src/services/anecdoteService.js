import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const generateId = () => (100000 * Math.random()).toFixed(0)

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}
const create = async (newOne) => {
 const uusi={content: newOne,
    id:generateId(),
    votes:0
 }
 await axios.post(baseUrl, uusi)
}
const update = async (id, object) =>{
  const response = await axios.put(`${baseUrl}/${id}`, object)
	return response.data
}


export default { getAll, create, update }