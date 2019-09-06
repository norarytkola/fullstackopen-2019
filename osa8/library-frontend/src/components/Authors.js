import React, {useState} from 'react'

const Authors = (props) => {
 const result=props.result
  const authors = props.authors
  const [born, setBorn]=useState('')
  const [a, setA]=useState('')
  const edit=props.edit
  
  const editA=async (e) => {
    e.preventDefault()
    await edit({
      variables: { a, born }
    })
   console.log('add book...')
    setA('')
    setBorn('')
  }
  
  if (!props.show) {
    return null
  }
  if (result.loading) {
    return <div>loading...</div>
  }
  const filtered=authors.filter(a=>a.born===null)
  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>
              born
            </th>
          </tr>
          {authors.map(a =>
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
            </tr>
          )}
        </tbody>
      </table>
      <h2>Set birthyear</h2>
      <form onSubmit={editA}>
      <select>
        <option></option>
        {filtered.map(f=>
        <option key={f.name}
        onChange={({target})=>setA(target.value)}>{f.name}</option>)}
      </select>
      <input
            value={born}
            onChange={({ target }) => setBorn(target.value)}
          />
      <button type="submit">Edit</button>
      </form>

    </div>
  )
}

export default Authors