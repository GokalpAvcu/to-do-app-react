import React from 'react'
import {MdFreeCancellation } from "react-icons/md";
import {BiEditAlt} from "react-icons/bi";
import {GrFormCheckmark} from "react-icons/gr";
import { useTodoLayerValue} from "../context/TodoContext";

function Todo({todo}) {
  return (
    <div className='todo-row'>
      <div>
      {todo.content}
      </div>

      <div className="todo-icons">
        <MdFreeCancellation className="todo-icon"/>
        <BiEditAlt className="todo-icon"/>
        <GrFormCheckmark className="todo-icon"/>
        </div>
      </div>
      
  )
}

export default Todo