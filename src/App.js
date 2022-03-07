import React from 'react'
import {useTodoLayerValue} from "./context/TodoContext";
import { useState } from 'react';
import TodoList from './components/TodoList'
import "./App.css";

function App  () {
  const [{ todos }, dispatch] = useTodoLayerValue();
  const [{content, setContent}] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if(!content) return;

    const newTodo = {
      id: Math.floor(Math.random() * 4234389734),
      content,
      isCompleted: false
    };

    dispatch({
      type: "ADD_TODO",
      payload: newTodo,
    });

    setContent('');
  };

  return  (
    <div className="container">
   <form onSubmit={handleSubmit} className="todo-form">
     <input 
     type="text" 
     className="todo-input" 
     onChange={(event) => setContent(event.target.value)} 
     value={content} 
     />
     <button className='todo-button'>Ekle</button>
     </form>

     {/* Todo Listesi  */}
     <TodoList todos={todos}/> 


    </div>
  );

};

export default App
