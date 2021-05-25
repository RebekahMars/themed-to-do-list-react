import "../css/App.css"
import list from "./list-data"
import {useState} from "react";

const ToDo = ({task, updateToDo}) => {

    const[editTask, setEditTask] = useState("");

    const completeTask = index => {
        let updatedToDoList = list.map(task => {
            if(task.index ===index) {
                task.completed = !task.completed
            }
            return task;
        })
        setEditTask(updatedToDoList);
    }
    
    return list.map((task, index) => (
        <div className={task.completed ? "crossed" : ""} key={index} onClick={()=> completeTask(task.index)}>
            {task.taskName}
        </div>
    ))
}
export default ToDo;