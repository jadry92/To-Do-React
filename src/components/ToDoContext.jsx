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
    }}>
      {props.children}
    </ToDoContext.Provider>
  );
}

export { ToDoContext, ToDoProvider }