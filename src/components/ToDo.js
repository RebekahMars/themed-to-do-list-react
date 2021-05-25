import "../css/App.css"
import list from "./list-data"
import {useState} from "react";
import Modal from "./ModifyTaskForm"

const ToDo = ({task, updateToDo}) => {

    const[toDoList, setToDoList] = useState("");
    const[showModal, setShowModal] = useState(false);

    const openModal = () => {
      setShowModal(prev => !prev);
    };

    const completeTask = index => {
        let updatedToDoList = list.map(task => {
            if(task.index ===index) {
                task.completed = !task.completed
            }
            return task;
        })
        setToDoList(updatedToDoList);
    }

    const removeTask = index => {
        let removedTask = [...list].filter(task=> task.index == index);
        console.log(removedTask);
        console.log(index);
        list.splice(removedTask, 1);
        setToDoList(removedTask);
    }

    const updateTask = index => {

        let modifyTask =[...list].filter(task=>task.index === index);
        let newTaskName = prompt("Please enter a new task name");

        modifyTask.forEach(element=>element.task= newTaskName);

        setToDoList(modifyTask);
    }
    
    return list.map((task, index) => (
        <div className="toDo">
            <input type="checkbox"></input>
            <div className={task.completed ? "crossed" : ""} key={index} onClick={()=> completeTask(task.index)}>
                {task.task}
            </div>
            <div>
                <button onClick={()=>removeTask(task.index)}>Delete</button>
                <button onClick={()=>updateTask(task.index)}>Modify</button>
            </div>
        </div>
    ))
}
export default ToDo;