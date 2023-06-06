import React, { useState } from 'react'
import { MdDoneOutline ,MdDeleteForever,MdEditSquare} from "react-icons/md";
 
function TodoItem(props) {
  return (
    <div className='flex shadow hover:shadow-lg h-20 w-96 justify-between'>
    <div className='pt-8'><MdDoneOutline className='m-2'/> </div> 
     <div  className='pt-8'><li>{props.text} </li></div> 
    <div className='flex'>
     <div  className='pt-8 p-3'  onClick={() =>
     {props.setTodoEdit(props.id)} }>
     <MdEditSquare size={25}/></div>
      <div  className='pt-8'  onClick={() =>{
        props.onCheck(props.id)
    }}><MdDeleteForever size={25}/></div>
    </div>
    </div>
  )
}

export default TodoItem