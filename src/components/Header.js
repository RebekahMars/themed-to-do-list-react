import image from "./the-sacred-texts.jpg"
import "../css/App.css"

const Header = () => {
    return (
        <header className="header">
            <img className="Image" src={image}></img>
            <h1>To-Do List</h1>
        </header>
    );
};

export default Header;