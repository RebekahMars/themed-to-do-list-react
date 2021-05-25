import list from "./list-data"
import ToDo from "./ToDo"
import {useState} from "react";
import ModifyModal from "./ModifyTaskForm"

const ToDoList = () => {

    const [toDoList, setToDoList] = useState([])

    return (
        <div>
            <ToDo>
                task={toDoList}
            </ToDo>
            <ModifyModal></ModifyModal>
        </div>
    )
}
export default ToDoList