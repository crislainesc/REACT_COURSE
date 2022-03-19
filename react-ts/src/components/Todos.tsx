import React, { useContext } from 'react';
import { TodosContext } from '../store/todos-context';
import TodoItem from './TodoItem';

import classes from './Todos.module.css';

const Todos: React.FC = (props) => {

	const todosContext = useContext(TodosContext);
	

	return (
		<ul className={classes.todos}>
			{todosContext.items.map((item) => (
				<TodoItem
					key={item.id}
					item={item}
					onRemoveTodo={todosContext.removeTodo.bind(null, item.id)}
				/>
			))}
		</ul>
	);
};

export default Todos;
