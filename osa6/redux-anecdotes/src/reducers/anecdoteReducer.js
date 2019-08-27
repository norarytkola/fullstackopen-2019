import generate from "@babel/generator";
import anecdoteService from '../services/anecdoteService'


  
  const getId = () => (100000 * Math.random()).toFixed(0)
  
  

  export const addOne =(content)=>{
    return {
      type: 'addOne',
      data: {
        content,
        id: getId(),
        votes:0,
        notify:true
      }
    }
  }
  
  
  const anecdoteReducer = (state = [], action) => {
    switch (action.type) {
      case 'vote':
        const id=action.data.id
        const voteToAdd = state.find(a => a.id === id)
        const newVotes=voteToAdd.votes+1
        const updated={
          ...voteToAdd,
          votes: newVotes,
          notify:true
        }
        anecdoteService.update(id, updated)
          return state.map(a=>
            a.id!==id ? a : updated)
      case 'addOne':
        const newAnecdote=action.data
        return state.concat(newAnecdote)
      case 'changeN':
        const aToChange=state.find(a=>a.notify===true)
        const id2=aToChange.id
        const updated2={
          ...aToChange,
          notify:false
        }
        return state.map(a=>
          a.id!==id2?a:updated2)
      case 'INIT_ANECDOTES':
      return action.data
            
      default: return state           
    }  
  }
  export const initializeAnecdotes = (anecdotes) => {
    return async dispatch => {
    const anecdootit = await anecdoteService.getAll() 
      dispatch({
        type: 'INIT_ANECDOTES',
        data: anecdootit
      })
  }}
  
  export default anecdoteReducer