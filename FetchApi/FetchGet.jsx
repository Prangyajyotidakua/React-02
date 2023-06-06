import React, { useEffect, useState } from 'react'

export const FetchGet = () => {
  const [users,setUser]=useState([])
  const [items, setItems] = useState([]);
  useEffect(()=>{
    fetch("http://192.168.206.77:8000/employee-details/api/admin-hrms/employee-details-list-api/ ").then((result)=>{
      result.json().then((resp)=>{
        // console.warn(resp)
        setUser(resp)
        console.log(users)
       
      })
    })
  },[])
  console.warn(users)
  return (
    <ul>
      {users.map((props,index) =><li key={props.id}>
    {props.salary}
  </li>)}
    </ul>
  )
}
