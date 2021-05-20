import "../css/App.css";
import Header from "./Header";
import list from "./list-data";
import ToDoList from "./To-Do-List"

import {useState} from "react";

function App() {

  const[toDoList, setToDoList] = useState(list);
  return (
    <div className="App">
      <Header/>
      <ToDoList toDoList={toDoList}/>
    </div>
  );
}

export default App;
