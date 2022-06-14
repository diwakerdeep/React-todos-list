import React from 'react';
import {TodoItem} from "../myModules/todoItem"

export const Todos = (props) => {
  let myStyle = {
    minHeight: "100vh",
    margin: "30px auto"
  }
  return (
  <div className='container' style={myStyle}>
    
    <h3 className='my 3'>Todos List</h3>
    {props.todos.length === 0? "No todos to display":
    props.todos.map((todo)=>{
      return(<TodoItem todo={todo} key={todo.SNo} onDelete={props.onDelete} />)
})
} 
  </div>
)}