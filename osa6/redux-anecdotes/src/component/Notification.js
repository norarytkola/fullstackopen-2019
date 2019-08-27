import React from 'react'
import AnecdoteList from './AnecdoteList'
import {connect} from 'react-redux'
import store from '../store'


const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  const list=props.anecdotes.filter(a=>a.notify===true)

  const change = () => {
    store.dispatch({
      type: 'changeN',
    })
  }

  if (list.length>0){
  return (
    <div style={style}>
 
      { list.map(a=>
        <div key={a.id}>
          Content:{a.content} </div>
           )}
           {setTimeout(() => {
        change()
      }, 5000)}
    </div>

  )
  
} else {
  return null
}}
const mapStateToProps = state => {
	return {
		anecdotes: state.anecdotes
	}
}

export default connect(mapStateToProps)(Notification)