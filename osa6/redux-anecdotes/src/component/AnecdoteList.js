import React from 'react'
import { connect } from 'react-redux'
import anecdoteService from '../services/anecdoteService';
import store from '../store'

const AnecdoteList=(props)=> {
    
  const vote = (id) => {
    store.dispatch({
      type: 'vote',
      data: { id }
    })
  }

  props.anecdotes.sort((a, b) => b.votes - a.votes)
  
  return(
      <>
  {props.anecdotes.map(anecdote =>
    <div key={anecdote.id} onChange={props.change}>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={() => vote(anecdote.id)}>vote</button>
      </div>
    </div>
  )}
  </>
  )
}
const mapStateToProps = state => {
	return {
    anecdotes: state.anecdotes
	}
}


const ConnectedAnecdotes = connect(mapStateToProps)(AnecdoteList)
export default ConnectedAnecdotes