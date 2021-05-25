import list from "./list-data"
import ToDo from "./ToDo"
import {useState} from "react";

const ToDoList = () => {

    const [toDoList, setToDoList] = useState([])

    return (
        <div>
            <ToDo>
                task={toDoList}
            </ToDo>
        </div>
    )
}
export default ToDoList