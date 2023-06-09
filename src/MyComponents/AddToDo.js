import React, { useState } from 'react';

export const AddToDo = (props) => {
     const [title, setTitle] = useState("");
     const [desc, setDesc] = useState("");
     const submit = (e) => {
          e.preventDefault();      //prevents the page from reloading
          if (!title || !desc) {
               alert("Title or Description is blank");
          }
          else {
               props.addToDo(title, desc);
               setTitle("");
               setDesc("");
          }
     }
  return (
     <div className='container my-3'>
          <h3>Add a ToDo</h3>
     <form onSubmit={submit}>
          <div className="mb-3 col-md-4">
               <label htmlFor="title" className="form-label">Title</label>
               <input type="text" value={title} onChange={(e) => {setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
          </div>
          <div className="mb-3 col-md-4">
               <label htmlFor="desc" className="form-label">Description</label>
               <input type="text" value={desc} onChange={(e) => {setDesc(e.target.value)}} className="form-control" id="desc"/>
          </div>
          <button type="submit" className="btn btn-sm btn-success">Add ToDo</button>
     </form>
     </div>
  )
}
