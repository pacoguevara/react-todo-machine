// import './App.css';

import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

const todos = [
  { text: 'This is a todo', completed: false, id: 1},
  { text: 'This is a todo 1', completed: false, id: 2},
  { text: 'This is a todo 2', completed: false, id: 3}
]
function App() {
	return (
		<React.Fragment>
			<TodoCounter />
			<TodoSearch />
			<TodoList>
				{
					todos.map(todo => (
						<TodoItem key={todo.id} text={todo.text}/>
					))
				}
			</TodoList>
			<CreateTodoButton />
		</React.Fragment>
  );
}

export default App;
