// import './App.css';

import React from "react";
import { AppUI } from "../AppUI";

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

	const completeTodo = (text) => {
		const todoIndex = todos.findIndex(todo => todo.text === text)
		const newTodos = [...todos]
		newTodos[todoIndex].completed = true;
		setTodos(newTodos)
	}

	const deleteTodo = (text) => {
		const todoIndex = todos.findIndex(todo => todo.text === text)
		const newTodos = [...todos]
		newTodos.splice(todoIndex, 1);
		setTodos(newTodos)
	}

	return (
		<AppUI
			totalTodos={totalTodos}
			completedTodos={completedTodos}
			searchValue={searchValue}
			setSearchValue={setSearchValue}
			searchedTodos={searchedTodos}
			completeTodo={completeTodo}
			deleteTodo={deleteTodo}
		/>
  );
}

export default App;
