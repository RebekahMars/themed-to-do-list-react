import "../css/Modal.css"
import {useState} from "react";
import {useForm} from "react-hook-form";
import listData from "./list-data";
import image from "./it doesn't work.jpg"

export const ModifyModal = ({showModal, setShowModal}) => {

    const[userInput, setUserInput] = useState("");

    const {register, handleSubmit, formState:{errors}} = useForm();

    const onSubmit = (userInput) => {
        listData.push({"index": listData.length + 1, task: userInput.taskName, "completed": false});
        setUserInput(userInput);
        setShowModal(prev => !prev);
    }

    return (
        <>
        {showModal ? (
            <div className="modal-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <img className="system-image" src={image}></img>
                    <h1>Modify Task</h1>
                    <label>Task Name</label>
                    <input type="text"{...register("taskName", {required: true})}></input> {/*I wanted to have props be sent to this modal with the list.text value */}
                    {errors.taskName &&<p style={{color:"red"}}>This is a required field</p>}
                    <button type="submit">Modify Task</button>
                    <button onClick={() => setShowModal(prev=> !prev)}>Exit</button>
                </form>
            </div>
        ) : null}
        </>
    )
};
export default ModifyModal;