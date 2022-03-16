import React from "react";
import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const ToDoContext = React.createContext()

function ToDoProvider(props) {

  const {
    item: toDos, 
    saveItem: saveToDos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', [])
  const [openModal, setOpenModal] = useState(false)
  const [search, setSearch] = useState('')

  const addToDo = (text) => {
    const newToDos = [...toDos]
    newToDos.push({
      completed:false,
      text
    })
    saveToDos(newToDos)
  }

  const completeToDo = (text) => {
    const toDoIndex = toDos.findIndex( toDo => toDo.text === text)
    const newToDos = [...toDos]
    newToDos[toDoIndex].completed = !toDos[toDoIndex].completed
    saveToDos(newToDos)
  }

  const deleteToDo = (text) => {
    const toDoIndex = toDos.findIndex( toDo => toDo.text === text)
    const newToDos = [...toDos]
    newToDos.splice(toDoIndex,1)
    saveToDos(newToDos)
  }

  const completedToDos = toDos.filter(toDo => toDo.completed).length
  const totalToDos = toDos.length

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
    <ToDoContext.Provider value={{
      loading,
      error,
      totalToDos,
      completedToDos,
      search,
      setSearch,
      searchedToDos,
      completeToDo,
      deleteToDo,
      openModal,
      setOpenModal,
      addToDo
    }}>
      {props.children}
    </ToDoContext.Provider>
  );
}

export { ToDoContext, ToDoProvider }