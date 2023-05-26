import React from 'react'
import { ToDoItem } from './ToDoItem'

export const ToDos = (props) => {
  return (
    <div className="container">
          <h3>ToDos List</h3>
          {props.todos.length===0 ? "No ToDos to display" :
               <>
               {props.todos.map( (todo) => {
                    return (
                         <>
                         <ToDoItem todos={todo} key={todo.sno} onDelete={props.onDelete}/>
                         <hr />
                         </>
                    )
               })}
               </>
          }
    </div>
  )
}
