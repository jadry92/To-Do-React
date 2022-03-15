import React from "react";
import { useContext } from "react";

import ToDoCounter from "./components/ToDoCounter";
import ToDoSearch from "./components/ToDoSearch";
import ToDoList from "./components/ToDoList";
import CreateToDoButton from "./components/CreateToDoButton";
import ToDoItem from "./components/ToDoItem";
import { ToDoContext } from "./components/ToDoContext";
import AddToDoModal from './components/AddToDoModal'
//import './App.css'


function AppUI() {

  const {
    totalToDos,
    error,
    loading,
    search,
    searchedToDos,
    completeToDo,
    deleteToDo,
    openModal
  } = useContext(ToDoContext)
  

  return (
    <React.Fragment>
      <ToDoCounter />
      <ToDoSearch />
      <ToDoList >
        {error && <p>Ups!! there is an error</p>}
        {loading && <p> ... ... ... ... ...</p>}
        {(!loading && !totalToDos) && <p>Add the first ToDo!</p>}
        {(!loading && !searchedToDos.length) && <p>No To Do find with "{search}"</p>}

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

      {openModal && <AddToDoModal> <p>dasdasdas</p> </AddToDoModal>}

      <CreateToDoButton/>
    </React.Fragment>
  );
}

export default AppUI;
