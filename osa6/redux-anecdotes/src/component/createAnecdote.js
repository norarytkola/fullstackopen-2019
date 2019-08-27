import React from 'react'
import {addOne} from '../reducers/anecdoteReducer'
import anecdoteServise from '../services/anecdoteService'
import {connect} from 'react-redux'

const Create=(props)=>{



const addOne = (event) => {
  event.preventDefault()
    const content = event.target.teksti.value
    props.store.dispatch(addOne(content))
    anecdoteServise.create(content)
    event.target.teksti.value = ''
  }

return(
  <>
<h2>create new</h2>
      <form onSubmit={addOne}>
        <div><input name="teksti"/></div>
        <button type="submit">create</button>
      </form>
      </>
)
}
export default connect(
	null,
	{ addOne}
)(Create)
    