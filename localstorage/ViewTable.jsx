import React from 'react'

export const ViewTable = ({books ,deleteBook }) => {
  return (
    books.map((book) =>
    <tr key={book.id}>
        <td>{book.title} </td>
        <td>{book.name} </td>
        <td>{book.number} </td>
        <td onClick={()=> deleteBook(book.id)}>Delete</td>
    </tr>
    )  
   
  )
}
