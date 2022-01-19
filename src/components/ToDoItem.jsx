import React from 'react'
import './styles/ToDoItem.css'


function ToDoItem(props) {
  const handelCompleted = (e) => {
    console.log('done')
  }

  const handelDelete = (e) => {
    console.log('delete')
  }

  return (
    <li className="TodoItem">
      <span 
      onClick={handelCompleted}
      className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>
        √
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
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
