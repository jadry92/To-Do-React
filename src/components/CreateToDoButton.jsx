import React from 'react'

import './styles/CreateToDoButton.css'


function CreateToDoButton() {
  
  const handelClick = (e) => {
    console.log(e)
  }
  
  return (
    <div>
      <button 
      onClick={handelClick}
      className="CreateTodoButton">
      +
      </button>
    </div>
  )
}

export default CreateToDoButton
