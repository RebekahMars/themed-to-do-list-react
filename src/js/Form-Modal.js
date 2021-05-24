import "../css/Modal.css"
import {useState, useEffect, useImperativeHandle, forwardRef} from "react";
import {useForm} from "react-hook-form";
import ToDoList from "./To-Do-List";
import listData from "./list-data";

export const Modal = ({showModal, setShowModal}) => {

    const[userInput] = useState("");

    const {register, handleSubmit, formState:{errors}} = useForm();

    const onSubmit = (userInput) => {
        listData.push({"index": listData.length + 1, task: userInput.taskName, "completed": false});
        setShowModal(prev => !prev);
    }

    return (
        <>
        {showModal ? (
            <div className="modal-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Add Task</h1>
                    <label>Task</label>
                    <input type="text" placeholder="Task Name"{...register("taskName", {required: true})}></input>
                    {errors.taskName &&<p style={{color:"red"}}>This is a required field</p>}
                    <button type="submit">Add New Task</button>
                    <button onClick={() => setShowModal(prev=> !prev)}>Exit</button>
                </form>
            </div>
        ) : null}
        </>
    )
};
export default Modal;