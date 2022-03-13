import React from 'react'

import './styles/ToDoCounter.css'

function ToDoCounter({totalToDos, completedToDos}) {


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
