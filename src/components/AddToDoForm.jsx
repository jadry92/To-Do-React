import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { ToDoContext } from './ToDoContext'
import './styles/AddToDoForm.css'

const AddToDoForm = () => {
  
  const [text, setText] = useState('')
  const {
    setOpenModal,
    addToDo
  } = useContext(ToDoContext)

  const onSummit = (event) => {
    event.preventDefault();
    addToDo(text)
    setOpenModal(false);
  }

  const onChange = (event) => {
    setText(event.target.value)
  }

  const onCancel = () => {
    setOpenModal(false)
  }

  return (
    <form onSubmit={onSummit}>
      <label>Add a new To Do</label>
      <textarea value={text} onChange={onChange}></textarea>
      <div className='TodoForm-buttonContainer'>
        <button 
          className='TodoForm-button TodoForm-button--cancel'
          type='button' 
          onClick={onCancel}>
            Cancel
        </button>
        <button
          className='TodoForm-button TodoForm-button--add'
          type='summit'>
          Save
        </button>
      </div>
    </form>
  )
}

export default AddToDoForm