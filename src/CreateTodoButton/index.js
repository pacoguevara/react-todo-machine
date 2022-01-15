import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  return (
    <button
      className="CreateTodoButton"
      onClick={() => alert('Click!')}>
      +
    </button>
  )
}

export { CreateTodoButton };