import React from "react";
import { useState } from "react";

import ToDoCounter from "./components/ToDoCounter";
import ToDoSearch from "./components/ToDoSearch";
import ToDoList from "./components/ToDoList";
import CreateToDoButton from "./components/CreateToDoButton";
import ToDoItem from "./components/ToDoItem";
//import './App.css'

function useLocalStorage(itemName, initialValue) {

  const itemLocalStorage = localStorage.getItem(itemName)
  let itemParse;
  if (!itemLocalStorage) {
    localStorage.setItem(itemName, JSON.stringify(initialValue))
    itemParse = [];
  } else {
    itemParse = JSON.parse(itemLocalStorage)
  }
  
  const [item, setItem]= useState(itemParse)

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }
  return [item, saveItem]
}

function App() {

  const [toDos, saveToDos] = useLocalStorage('TODOS_V1', [])
  const [search, setSearch] = useState('')

  const completeToDo = (text) => {
    const toDoIndex = toDos.findIndex( toDo => toDo.text === text)
    const oldToDos = [...toDos]
    oldToDos[toDoIndex].completed = !toDos[toDoIndex].completed
    saveToDos(oldToDos)
  }

  const deleteToDo = (text) => {
    const toDoIndex = toDos.findIndex( toDo => toDo.text === text)
    const oldToDos = [...toDos]
    oldToDos.splice(toDoIndex,1)
    saveToDos(oldToDos)
  }

  const completedToDos = toDos.filter(toDo => toDo.completed).length

  let searchedToDos = [];
  if (search === '') {
    searchedToDos = toDos
  } else {
    searchedToDos = toDos.filter(
      (toDo) => {
        const todoText = toDo.text.toLocaleLowerCase()
        const textSearch = search.toLocaleLowerCase()
        return todoText.includes(textSearch)
      })
  }

  return (
    <React.Fragment>
      <ToDoCounter totalToDos={toDos.length} completedToDos={completedToDos}/>
      <ToDoSearch search={search} setSearch={setSearch} />
      <ToDoList >
        {searchedToDos.map((item) => (
          <ToDoItem 
            key={item.text} 
            text={item.text} 
            completed={item.completed}
            onComplete={completeToDo}
            onDelete={deleteToDo}
          />
        ))}
      </ToDoList>
      <CreateToDoButton/>
    </React.Fragment>

  );
}

export default App;
