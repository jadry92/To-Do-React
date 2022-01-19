import React from "react";

import ToDoCounter from "./components/ToDoCounter";
import ToDoSearch from "./components/ToDoSearch";
import ToDoList from "./components/ToDoList";
import CreateToDoButton from "./components/CreateToDoButton";
import ToDoItem from "./components/ToDoItem";

//import './App.css'

function App() {

  const toDos = [
    { text: 'Cortar cebolla', completed: true },
    { text: 'Tomar el cursso de intro a React', completed: false },
    { text: 'Llorar con la llorona', completed: false },
    { text: 'LALALALAA', completed: false },
  ];

  return (
    <React.Fragment>
      <ToDoCounter />
      <ToDoSearch />
      <ToDoList >
        {toDos.map((item, index) => (
          <ToDoItem key={index} text={item.text} completed={item.completed}/>
        ))}
      </ToDoList>
      <CreateToDoButton/>
    </React.Fragment>

  );
}

export default App;
