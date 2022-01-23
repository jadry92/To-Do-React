import React from 'react'
import './styles/ToDoSearch.css'


function ToDoSearch({search, setSearch}) {

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
