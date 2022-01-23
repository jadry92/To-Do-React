import React from "react";
import { useState } from "react";

import ToDoCounter from "./components/ToDoCounter";
import ToDoSearch from "./components/ToDoSearch";
import ToDoList from "./components/ToDoList";
import CreateToDoButton from "./components/CreateToDoButton";
import ToDoItem from "./components/ToDoItem";


//import './App.css'

const toDosDefault = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el cursso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'LALALALAA', completed: false },
];

function App() {

  const [search, setSearch] = useState('')

  let toDos = toDosDefault
  if (search !== '') {
    toDos = toDosDefault.filter((value) => value.text.toLocaleLowerCase().includes(search) )
  } 

  return (
    <React.Fragment>
      <ToDoCounter />
      <ToDoSearch search={search} setSearch={setSearch} />
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
