import "../css/App.css"
const ToDo = ({item}) => {
    return (
        <div className={item.completed ? "crossed" : ""}>
            {item.task}
        </div>
    );
    };
export default ToDo;