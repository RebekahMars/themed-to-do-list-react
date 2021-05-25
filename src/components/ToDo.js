import "../css/App.css"
import list from "./list-data"
import {useState} from "react";

const ToDo = ({task, updateToDo}) => {

    const[toDoList, setToDoList] = useState("");

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
        let removedTask = [...list].filter(task=> task.index ===index);
        list.splice(removedTask, 1);
        console.log(list);
    }

    const updateTask = index => {
        let modifyTask =[...list].filter(task=>task.task === index);

    }
    
    return list.map((task, index) => (
        <div className="toDo">
            <div className={task.completed ? "crossed" : ""} key={index} onClick={()=> completeTask(task.index)}>
            {task.task}
            </div>
            <button onClick={()=> updateTask(task.task)}>Modify</button>
            <button onClick={()=>removeTask(task.index)}>Delete</button>
        </div>
    ))
}
export default ToDo;