import React, { useEffect } from "react";
import { } from "./App.css";
import Header from "./myModules/header";
import { Todos } from "./myModules/todos";
import Footer from "./myModules/footer";
import { AddTodo } from "./myModules/addTodo";
import { About } from "./myModules/about";
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am onDelete", todo);

    setTodos(todos.filter((z) => {
      return z !== todo;
    }));
    console.log("deleted item", todos)
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let SNo;
    if (todos.length === 0) {
      SNo = 1;
    } else {
      SNo = todos[todos.length - 1].SNo + 1;
    }
    const myTodo = {
      sno: SNo,
      title: title,
      desc: desc
    }
    
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }


  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])


  return (
    <>
    <Router>
      <Header title=" My Todos List" />
      
      <Switch>
       <Route exact path="/" render = {()=>{
          return(
          <>
           <AddTodo addTodo={addTodo} />
           <Todos todos={todos} onDelete={onDelete} />
          </>)
        }}>
        </Route>

        <Route exact path='/about'>
          <About/>
        </Route>
     </Switch>
    
     <Footer />
    
    </Router>
    </>
  );
}

export default App;
