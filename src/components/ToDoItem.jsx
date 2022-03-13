import React from 'react'
import './styles/ToDoItem.css'


function ToDoItem({text, completed, onComplete, onDelete}) {
  const handelCompleted = (e) => {
    onComplete(text)
  }

  const handelDelete = (e) => {
    onDelete(text)
  }

  return (
    <li className="TodoItem">
      <span 
      onClick={handelCompleted}
      className={`Icon Icon-check ${completed && 'Icon-check--active'}`}>
        √
      </span>
      <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
        {text}
      </p>
      <span 
      onClick={handelDelete}
      className="Icon Icon-delete">
        X
      </span>
    </li>
  )
}

export default ToDoItem
