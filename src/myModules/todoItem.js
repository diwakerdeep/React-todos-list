import React from 'react';
import {Todos} from "./todos";

export const TodoItem = ({todo, onDelete}) => {
  return (
    <>
    <div>
        <p>{todo.SNo}</p>
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>
        <button className = "btn btn-sm btn-danger" onClick = {()=>onDelete(todo)}>Delete</button>
    </div>
    <hr/>
    </>
  )
}
 