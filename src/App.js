// import './App.css';

import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

const defaultTodos = [
  { text: 'This is a todo', completed: false, id: 1},
  { text: 'This is a todo 1', completed: true, id: 2},
  { text: 'This is a todo 2', completed: false, id: 3}
]
function App() {
	const [searchValue, setSearchValue] = React.useState('');
	const [todos, setTodos] = React.useState(defaultTodos);

	const completedTodos = todos.filter(todo => !!todo.completed).length
	const totalTodos = todos.length

	let searchedTodos = []
	if (!searchValue.length >= 1) {
		searchedTodos = todos;
	} else {
		searchedTodos = todos.filter(todo => {
			const todoText = todo.text.toLowerCase()
			const searchText = searchValue.toLowerCase()
			return todoText.includes(searchText)
		})
	}

	return (
		<React.Fragment>
			<TodoCounter
				total={totalTodos}
				completed={completedTodos}
			/>
			<TodoSearch
				searchValue={searchValue}
				setSearchValue={setSearchValue}
			/>
			<TodoList>
				{
					searchedTodos.map(todo => (
						<TodoItem key={todo.id} {...todo}/>
					))
				}
			</TodoList>
			<CreateTodoButton />
		</React.Fragment>
  );
}

export default App;
