import {useState} from "react";

import "../css/App.css";
import Header from "../components/Header";
import list from "../components/list-data";
import ToDoList from "../components/To-Do-List"
import Modal from "../components/ToDoForm"


function App() {

  const[toDoList, setToDoList] = useState(list);
  const[showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <>
    <div className="toDoApp">
      <Header/>
      <ToDoList/>
      <button onClick ={openModal}>Add Task</button>
      <Modal showModal={showModal} setShowModal={setShowModal}/>
    </div>
  </>
  );
}

export default App;
