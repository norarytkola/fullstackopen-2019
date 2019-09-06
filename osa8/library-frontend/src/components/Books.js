import React from 'react'


const Books = (props ) => {
  
  const result=props.result
  const books=props.books

  
if (props.show){
  if (result.loading) {
    return <div>loading...</div>
  } 
      return (
        <div>
          <h2>books</h2>
            <table>
              <tbody>
                <tr>
                 <th></th>
                 <th>author
                 </th>
                 <th> published
                 </th>
              </tr>
          {books.map(a=><tr key={a.title}>
              <td>{a.title}</td>
              <td></td>
              <td>{a.published}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )} else {
  return null
  }
 }

export default Books