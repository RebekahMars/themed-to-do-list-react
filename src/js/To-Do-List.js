import ToDo from "./ToDo"

const ToDoList = ({toDoList}) => {
    return (
        <div>
            {toDoList.map(item => {
                return(
                    <ToDo item={item} />
                )
            })}
        </div>
    )
}
export default ToDoList