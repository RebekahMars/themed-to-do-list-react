import "../css/Modal.css"
import {useState, useEffect, useImperativeHandle, forwardRef} from "react";
import {useForm} from "react-hook-form";

export const Modal = ({showModal, setShowModal}) => {

    const {register, handleSubmit, formState:{errors}} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <>
        {showModal ? (
            <div className="modal-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Add Task</h1>
                    <label>Task</label>
                    <input type="text" placeholder="Task Name"{...register("taskName", {required: true})}></input>
                    <span style={{color:"red"}}>{errors.taskName &&<p>This is a required field</p>}</span>
                    <button type="submit">Add New Task</button>
                    <button onClick={() => setShowModal(prev=> !prev)}>Exit</button>
                </form>
            </div>
        ) : null}
        </>
    )
};
export default Modal;