import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {toggle,destroy} from "../redux/todos/todosSlice"


function TodoList() {
    const items = useSelector((state) => state.todos.items)
    const dispatch = useDispatch()
    
    const isActive = useSelector((state) => state.todos.isActive)

    
    
    let filtered = [];

      if ( isActive === 'active'){
        filtered = items.filter(todo => todo.isCompleted === false) ;
        
      }else if( isActive === 'completed'){
        filtered = items.filter(todo => todo.isCompleted === true);
      }
      else {
        filtered = items
      }
      
      

  return (

    <ul className="todo-list">
			
    {
        filtered.map (item => 
            <li key={item.id} className={item.isCompleted && 'completed'}>
				<div className="view">
					<input className="toggle" type="checkbox" checked={item.completed} onChange={() => dispatch(toggle({id: item.id}))} />
					<label>{item.title}</label>
					<button className="destroy" onClick={() => dispatch(destroy(item.id))}></button>
				</div>
			</li>
    )
    }
		</ul>
  )
}

export default TodoList
