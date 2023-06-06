import React, { useEffect, useState } from 'react'
import { json } from 'react-router-dom'
import { ViewTable } from './ViewTable'
import { Button } from '@mui/material'

export const Localstorage = () => {

  //getting value from local storage
  const getDatafromLocalStorage = ()=>{
    const data = localStorage.getItem('books')

    if(data) {
        return JSON.parse(data)
    }
    else {
        return []
    }
}

    //input field state
    const [title, settitle] = useState('')
    const [name, setname] = useState('')
    const [id, setid] = useState()
    const [number, setnumber] = useState('')
    //array of object

    const [books, setbooks] = useState(getDatafromLocalStorage)
    const handleSubmit = (e) => {
        e.preventDefault()
        let book = {
            title,
            name, number,id
        }

        setbooks([...books, book])
        settitle('')
        setname('')
        setnumber('')
        setid()
    }


    //saving data to local storage
    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
    }, [books])
 
//handle dalate

const deleteBook=(id)=>{
    const filteredBooks=books.filter((element,index)=>{
      return element.id !== id
    })
    setbooks(filteredBooks);
  }
    
    return (
        <div>
            <h1>enter data</h1>
            <div>
                <form onSubmit={handleSubmit}>
              
                    <label>title</label>
                    <input type='text'
                        onChange={(e) => settitle(e.target.value)}
                        value={title}
                        required placeholder='enter title' />
                    <br />
                    <label>Name</label>
                    <input type='text'
                        onChange={(e) => setname(e.target.value)}
                        value={name}
                        required placeholder='enter name' />
                    <br />
                    <label>number</label>
                    <input type='text'
                        onChange={(e) => setnumber(e.target.value)}
                        value={number}
                        required placeholder='enter number' />
                    <br />
                   
                    <button>submit</button>

                </form>
            </div>
            <div>
           
            {books.length>0&&<>
              <table>
                <thead>
                  <tr>
                    <th>title</th>
                    <th>name</th>
                    <th>number</th>
                  </tr>
                </thead>
                <tbody>
               
                <ViewTable books={books} deleteBook={deleteBook} />
                </tbody>
              </table>  
              <button onClick={()=> setbooks([])}>remove all</button>   
          </>}
          {books.length < 1 && <div>No books are added yet</div>}
           </div>

        </div>
    )
}
