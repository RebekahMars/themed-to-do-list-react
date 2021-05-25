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

  const toggleCompleted = (index) => {
   /*  let listItems = toDoList.map(item => {
      return item.index === Number(index) ? {...item, completed: !item.completed} : {...item};
    }); */
    console.log("you clicked me");
    let updatedToDo = toDoList.map(toDo => {
      if(toDo.index === index) {
        toDo.completed = !toDo.completed;
      }
      return toDo;
    });
    setToDoList(updatedToDo);
    //setToDoList(listItems);
    //console.log(listItems);
  }
  // const modal = useRef(null);
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
