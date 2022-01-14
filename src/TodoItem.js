import React from "react";
import './TodoItem.css';

function TodoItem(props) {
  const onComplete = () => {
    alert('TODO complete!')
  }

  const onDelete = () => {
    alert('TODO deleted!')
  }
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={onComplete}
      >
        √
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete"
      onClick={onDelete}>X</span>
    </li>
  )
}

export { TodoItem };