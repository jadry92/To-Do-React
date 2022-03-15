import React from 'react'
import './styles/ToDoSearch.css'
import { useContext } from "react";
import { ToDoContext } from './ToDoContext'


function ToDoSearch() {

  const {search, setSearch} = useContext(ToDoContext)
  const handelSearchChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div>
      <input 
      onChange={handelSearchChange}
      className="TodoSearch" value={search} type="text"></input>
    </div>
  )
}

export default ToDoSearch
