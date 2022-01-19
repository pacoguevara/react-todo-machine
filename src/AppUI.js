import React from "react";
import { TodoContext } from "./TodoContext";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

function AppUI() {
  const { error, loading, searchedTodos, completeTodo, deleteTodo } = React.useContext(TodoContext)
  return (
    <React.Fragment>
			<TodoCounter />
      <TodoSearch />
      <TodoList>
        { error && <p>Something went wrong</p> }
        { loading && <p>Loading...</p> }
        { (!loading && !searchedTodos.length) && <p>Add a TODO.</p> }
        {
          searchedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              {...todo}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text) }
            />
          ))
        }
      </TodoList>
			<CreateTodoButton />
		</React.Fragment>
  );
}

export { AppUI }