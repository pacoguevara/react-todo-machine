// import './App.css';

import React from "react";

const todos = [
  { text: 'This is a todo', completed: false},
  { text: 'This is a todo 1', completed: false},
  { text: 'This is a todo 2', completed: false}
]
function App() {
	return (
		<React.Fragment>
			<TodoCounter />
			<TodoSearch />
			<TodoList>
				{
					todos.map(todo => (
						<TodoItem/>
					))
				}
			</TodoList>
			<CreateTodoButton />
		</React.Fragment>
  );
}

export default App;
