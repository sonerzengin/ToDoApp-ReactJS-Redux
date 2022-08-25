import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeActiveFilter, destroyCompleted } from '../redux/todos/todosSlice';

function Footer() {

	const items = useSelector((state) => state.todos.items);
	const leftItems = items.filter(item => !item.isCompleted);
	
	const isActive = useSelector((state) => state.todos.isActive );
	const dispatch = useDispatch();
	
  return (
    <footer className="footer">
		<span className="todo-count">
			<strong>{leftItems.length}</strong>
			item{leftItems.length > 1 && 's'} left
		</span>

		<ul className="filters">
			<li>
				<a href="#/" className={isActive === 'all' ? "selected" : ""} onClick={() => dispatch(changeActiveFilter('all'))}>All</a>
			</li>
			<li>
				<a href="#/" className={isActive === 'active' ? "selected" : ""} onClick={() => dispatch(changeActiveFilter('active'))}>Active</a>
			</li>
			<li>
				<a href="#/" className={isActive === 'completed' ? "selected" : ""} onClick={() => dispatch(changeActiveFilter('completed'))}>Completed</a>
			</li>
		</ul>

		<button className="clear-completed" onClick={() => dispatch(destroyCompleted())}>
			Clear completed
		</button>
	</footer>
  )
}

export default Footer
