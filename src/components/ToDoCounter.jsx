import React from 'react'
import { useContext } from 'react'
import { ToDoContext } from "./ToDoContext";

import './styles/ToDoCounter.css'

function ToDoCounter() {

  const {totalToDos, completedToDos} = useContext(ToDoContext)

  return (
    <div>
      <h3 className="TodoCounter" >
        You have complete {completedToDos}/{totalToDos} Tasks 
      </h3>
      <h1 className="TodoCounter">
        Keep Going !! 
      </h1>
    </div>
  )
}

export default ToDoCounter
