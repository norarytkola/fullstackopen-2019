import React from 'react';
import Create from './component/createAnecdote'
import AnecdoteList from './component/AnecdoteList'
import Notification from './component/Notification'
import Filter from './component/Filter'
import { useEffect} from 'react'
import {initializeAnecdotes} from './reducers/anecdoteReducer'
import store from './store'
import {connect} from 'react-redux'



const App = (props) => {

  useEffect(() => {
    props.initializeAnecdotes()
  },[])


  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification/>
      <Filter />
      <Create/>
      </div>
      
  )
}

export default connect(
	null,
	{ initializeAnecdotes }
)(App)