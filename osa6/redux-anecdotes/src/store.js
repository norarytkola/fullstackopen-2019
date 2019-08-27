import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import anecdoteReducer from './reducers/anecdoteReducer'

const reducer = combineReducers({
  anecdotes: anecdoteReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store