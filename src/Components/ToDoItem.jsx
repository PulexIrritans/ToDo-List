import {ReactComponent as TrashLogo} from '../trash.svg'

const ToDoItem = ({ text, remove, toggleStatus, status }) => {
    return (
        <li className="Todo-li">
        <button className="Trash-button" onClick={remove}><TrashLogo className="Trash-svg"/></button>
        <p>{text}</p>
        <button className={`Todo-li-button ${status}`} onClick={toggleStatus}>{status}</button>
        </li>
    )
}

export default ToDoItem