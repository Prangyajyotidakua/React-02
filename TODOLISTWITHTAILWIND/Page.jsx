import React, { useState } from "react";
import TodoItem from "./Todolist";

function Page() {
    const [inputText, setInputText] = useState("")
    const [items, setItems] = useState([])
    const [editTodo , setTodo] = useState(null)
    const[con , setcon] = useState(true)

    function handleChange(event) {
        const newValue = event.target.value
        setInputText(newValue)
    }

    function addItem() {
        if(!inputText){
         console.log('fill input')
        }else if (inputText && !con){
            setItems(items.map((ele) =>{
                if(ele.id === editTodo){
                    return{...ele ,text:inputText}
                } 
                return ele 
            }))

            
        }
        
        else{ setItems(prevValue => {
            return [inputText, ...prevValue]
        })}
        setInputText("")
    }
    function deleteItem(id) {
        setItems(prevValue => {
            return prevValue.filter((item, index) => {
                return index !== id
            })
        })
    }
    function setTodoItem(id) {
        let newedit = items.find((ele) =>{
            return ele.id === id
        })
        setInputText(newedit.text)
        setTodo(id)
        setcon(false)
    }
    return (
        <div className=" ">
        
        
            <div className="bg-gray-200 rounded-full flex items-center
            px-2 w-[400px]  mt-9 ">
                <input className='bg-transparent p-2  w-full focus:outline-none' type="text" onChange={handleChange} placeholder="add Task to do" value={inputText}></input>
                <button  onClick={addItem}>add</button></div>
            <div className="pt-8 ">
                <ol>
                    {items.map((todoItem, index) => {
                        return <TodoItem
                            text={todoItem}
                            onCheck={deleteItem}
                            setTodoEdit ={setTodoItem}
                            key={index}
                            id={index} />
                    }
                    )}
                </ol>
            </div>

        </div>
    );
}

export default Page