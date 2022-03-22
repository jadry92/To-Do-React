import React from 'react'
import Icon from './Icon'
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
      className={`Icon-container Icon-container-check ${completed && 'Icon-check--active'}`}>
        <Icon type={completed ? 'done' : 'undone'}/>
      </span>
      <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
        {text}
      </p>
      <span 
      onClick={handelDelete}
      className="Icon-container Icon-container-delete">
        <Icon type={'delete'}/>
      </span>
    </li>
  )
}

export default ToDoItem
