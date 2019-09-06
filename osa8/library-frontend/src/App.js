import React, { useState } from 'react'
import Authors from './components/Authors'
import Books from './components/Books'
import NewBook from './components/NewBook'
import { gql } from 'apollo-boost'
import { useQuery, useMutation, useApolloClient } from '@apollo/react-hooks'
import { onError } from 'apollo-link-error';


const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password)  {
      value
    }
  }
`
const ALL_BOOKS = gql`
{
  allBooks  {
    title
    published
  }
}
`
const ALL_AUTHORS= gql`
{
  allAuthors {
    name
    born
  }
}
`
const NEW_BOOK= gql`
mutation newBook($title: String!, $author: String!, $published: Int, $genres: [String]) {
  addBook(
    title: $title,
    author:{name: $author},
    published: $published,
    genres: [$genres]
  ) {
    title
    author
    published
    genres
    id
  }
}`
const EDIT_BIRTHYEAR = gql`
  mutation edit($name: String!, $born: Int!) {
    editAuthor(name: $name, born: $born)  {
      name
      born
      id
    }
  }
`
const App = (props) => {

  const [page, setPage] = useState('login')
  const[errormessage, setErrorMessage]=useState(null)
  const handleError = (error) => {
    setErrorMessage(error.graphQLErrors[0].message)
    setTimeout(() => {
      setErrorMessage(null)
    }, 10000)
  }

  const result=useQuery(ALL_BOOKS)
  const authors=useQuery(ALL_AUTHORS)
  const [addBook] = useMutation(NEW_BOOK, {
    refetchQueries: [{ query: ALL_BOOKS }]
  })
  const [edit]=useMutation(EDIT_BIRTHYEAR)
  const [login]= useMutation(LOGIN,{
    onError: handleError})

const [name, setName]=useState('')
const [password, setPassword]=useState('')
  const submit = async (e) => {
      e.preventDefault()
      const logged=await login({
        variables: { name, password }
      })
      if (logged) {
          const token = logged.data.login.value
          setToken(token)
          localStorage.setItem('usertoken', token)
        }
      setName('')
      setPassword('')
  }
  const logout = () => {
    setToken(null)
    localStorage.clear()
    props.client.resetStore()
  }
let [token, setToken]=useState(null)


const loginform=()=> {
  return (
    <>
    <div>
      <form onSubmit={submit}>
        <div>
          <h2>Log in </h2>
          name:
          <input
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </div>
        <div>
          password:
          <input
            type="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type='submit'>Log In</button>
      </form>
    </div>
    </>
  )
}
 
  
  return (

    <div>
      {errormessage}
      <div>
        <button onClick={() => setPage('authors')}>authors</button>
        <button onClick={() => setPage('books')}>books</button>
        <button onClick={() => setPage('add')}>add book</button>
      </div>

      <Authors
        show={page === 'authors'} result={authors} authors={authors.data.allAuthors}  edit={edit}
      />
       <Books
            show={page === 'books'} result={result} books={result.data.allBooks} />
      <NewBook
        show={page === 'add'} addBook={addBook}
      />
        {token ===null?
        loginform() :
        <div><button onClick={logout}>Log out</button></div>}
    </div>
  )
}

export default App