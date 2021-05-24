import {useState} from "react";

import "../css/App.css";
import Header from "./Header";
import list from "./list-data";
import ToDoList from "./To-Do-List"
import Modal from "./Form-Modal"


function App() {

  const[toDoList, setToDoList] = useState(list);
  const[showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  const toggleCompleted = (index) => {
    let listItems = toDoList.map(item => {
      return item.index === Number(index) ? {...item, completed: !item.completed} : {...item};
    });

    setToDoList(listItems);
    console.log(listItems);
  }
  // const modal = useRef(null);
  return (
    <>
    <div className="App">
      <Header/>
      <ToDoList toDoList={toDoList} toggleCompleted={toggleCompleted}/>
      <button onClick ={openModal}>Add Task</button>
      <Modal showModal={showModal} setShowModal={setShowModal}/>
    </div>
  </>
  );
}

export default App;
