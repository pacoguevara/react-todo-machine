import React from "react";

function TodoItem(props) {
  return (
    <li>
      <span>C</span>
      {props.text}
      <span>X</span>
    </li>
  )
}

export { TodoItem };