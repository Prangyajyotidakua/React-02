import React, { useState } from 'react'

//for routing purpose
//import {useHistory} from 'react-router-dom'

function Register() {
    const[name , setName] = useState("")
    const[email , setEmail] = useState("")
    const[password , setPassword] = useState("")


    //for routing
    //const history = useHistory() ;


    //singup and after event
// when ever we hit api it will return premises
    async function singUp(){

        //to make name password email as object
        let item ={name ,password, email}
        console.warn(item)
  //it will wait for the result and it will resolve one promise
  // whenever call it  returns 2 promisesone for calling the api another one is the resolved json
        let result = await  fetch("//url",{
            method:'POST',
            body:JSON.stringify(item),
            //header use for what type of data you are sending and accepting
            headers:{
                //key : value
                "Content-Type":'application/json',
                "Accept":'application/JSON'

            }
        })
        //to resolve the json
        result =await result.json()

        //for storing the data
        //databasename.hookfunction("user-info",JONS.stringify(result) )
        //example
        //localStorage.setItems("user-info",JONS.stringify(result))


        //routing 
        //history.push("/url")
    }
    
    return (
        <div>
            <form>
            <div>
                    <label >User Name</label>
                    <input value={name} onChange={(e) =>setName(e.target.value)} type="email" placeholder='Name'/>
                      
                </div>
                <div>
                    <label >Email address</label>
                    <input value={email}  onChange={(e) =>setEmail(e.target.value)} type="email" placeholder='email'/>
                      
                </div>
                <div>
                    <label>Password</label>
                    <input value={password}  onChange={(e) =>setPassword(e.target.value)} type="password" placeholder='password'/>
                </div>
                <div >
                    <input type="checkbox"/>
                        <label>Check me out</label>
                </div>
                <button onClick={singUp} type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Register