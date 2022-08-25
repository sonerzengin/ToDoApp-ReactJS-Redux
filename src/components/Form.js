import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addTodo } from '../redux/todos/todosSlice'

function Form() {
  const [title,setTitle] = useState('')
  const dispatch = useDispatch();



  const HandleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({ id: nanoid() ,title , isCompleted:false }))
    setTitle('')
  }

  return (
        <form onSubmit={HandleSubmit}>
			<input className="new-todo" placeholder="What needs to be done?" autoFocus value={title} onChange={(e) => setTitle(e.target.value)}/>
		</form>
  )
}

export default Form;
