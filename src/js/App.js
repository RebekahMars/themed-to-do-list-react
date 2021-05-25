import {useState} from "react";

import "../css/App.css";
import Header from "../components/Header";
import list from "../components/list-data";
import ToDoList from "../components/To-Do-List"
import AddModal from "../components/AddTaskForm"
import ModifyModal from "../components/ModifyTaskForm"


function App() {

  const[toDoList, setToDoList] = useState(list);
  const[showModal, setShowModal] = useState(false);
  const[showModifyModal, setModifyModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  const openModifyModal = () => {
    setModifyModal(prev => !prev);
  }

  const filterTasks = () => {
    let filteredCompletedTasks =[...list].filter(task=>task.completed === false);

    for(let i =0; i< list.length; i++)
    {
      if(list[i].completed === true)
      {
        list.splice(i, 1);
        i--;
      }
    }
    setToDoList(filteredCompletedTasks);
  }

  return (
    <>
    <div className="toDoApp">
      <Header/>
      <ToDoList toDoList={toDoList}/>
      <div>
        <button onClick ={openModal}>Add Task</button>
        <button onClick={openModifyModal}>Modify Task</button>
        <button onClick={filterTasks}>Filter Tasks</button>
      </div>
      <AddModal showModal={showModal} setShowModal={setShowModal}/>
      <ModifyModal className="modify-modal" showModal={showModifyModal} setShowModal={setModifyModal}/>
    </div>
  </>
  );
}

export default App;
