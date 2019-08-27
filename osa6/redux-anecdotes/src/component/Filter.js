import React from 'react'
import AnecdoteList from './AnecdoteList'

const Filter = (props) => {

    const anecdotes=props.anecdotes
    let filtered=anecdotes

  const handleChange = (event) => {
     filtered.filter(a=>a.content.includes(event.target.value))
  }

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
      <AnecdoteList store={props.store} anecdotes={filtered}/>
    </div>
  )
}

export default Filter