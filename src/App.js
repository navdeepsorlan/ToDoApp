import './App.css';
import Header from './MyComponents/Header';
import {ToDos} from './MyComponents/ToDos';
import {AddToDo} from "./MyComponents/AddToDo";
import React, { useState, useEffect } from 'react';

function App() {
  let initTodo;
  if (localStorage.getItem("todos")===null) {
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    setTodos( todos.filter( (e) => {
      return e!==todo;
    } ) );
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addToDo = (title, desc) => {
    let sno;
    if (todos.length===0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myToDo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myToDo]);
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {           //setTodos' async nature is tackled using this
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
    <Header title="My To-Do List" searchBar={false}/>
    <AddToDo addToDo={addToDo}/>
    <ToDos todos={todos} onDelete={onDelete}/>
    </>
  );
}

export default App;
