import React from 'react'
import './styles/ToDoSearch.css'
import {useState} from 'react'

function ToDoSearch() {
  const [search, setSearch] = useState('Cebolla')

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
