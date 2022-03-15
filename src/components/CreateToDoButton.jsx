import React from 'react'
import { useContext } from 'react'
import './styles/CreateToDoButton.css'
import { ToDoContext } from './ToDoContext'


function CreateToDoButton() {
  
  const {openModal, setOpenModal} = useContext(ToDoContext)

  const handelClick = (e) => {
    setOpenModal(!openModal)
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
