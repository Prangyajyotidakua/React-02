import React, {useState, useEffect, useContext} from 'react'
import AuthContext from './AuthContext'

const HomePage = () => {
    let [notes, setNotes] = useState([])
    let {authTokens, logoutUser} = useContext(AuthContext)

    useEffect(()=> {
        getNotes()
    }, [])


    let getNotes = async() =>{
        let response = await fetch('http://192.168.206.77:8000/employee-details/api/admin-hrms/employee-list-api/ ', {
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer ' + String(authTokens.access)
            }
        })
        let data = await response.json()

        if(response.status === 200){
            setNotes(data)
        }else if(response.statusText === 'Unauthorized'){
            logoutUser()
        }
        
    }

    return (
        <div>
            <p>You are logged to the home page!</p>


            <ul>
                {notes.map(note => (
                    <li key={note.id} >{note.body}</li>
                ))}
            </ul>
        </div>
    )
}

export default HomePage