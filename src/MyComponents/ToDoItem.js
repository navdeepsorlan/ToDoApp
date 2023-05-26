import React from 'react'

export const ToDoItem = ({todos, onDelete}) => {    //can pass only 'props' here and wherever 'todos' or 'onDelete' is used, write props.todos and props.onDelete
  return (
    <div>
        <h4>{todos.title}</h4>
        <p>{todos.desc}</p>
        <button className="btn btn-sm btn-danger mb-3" onClick={ () => onDelete(todos)}>Delete</button>
    </div>
  )
}
