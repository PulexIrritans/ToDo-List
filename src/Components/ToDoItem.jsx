import { useState } from 'react'
import {ReactComponent as TrashLogo} from '../trash.svg'
import {ReactComponent as EditLogo} from '../edit.svg'
import {ReactComponent as ConfirmLogo} from '../confirm.svg'

const ToDoItem = ({ id, text, remove, toggleStatus, status, handleUpdateInput }) => {

const [editMode, setEditMode] = useState(false)


    return  <li className="Todo-li">
        {editMode ? (
                 <>
                 <input onInput={(event) => handleUpdateInput(event, id)} value={text}></input>
                 <button onClick={setEditMode}><ConfirmLogo style={{width: "20px"}}/></button>
                 </>
        ) : (
        <>
        <button className="Trash-button" onClick={remove}><TrashLogo className="Trash-svg"/></button>
        <p>{text}</p>
        <div onClick={setEditMode}><EditLogo style={{width: "20px"}}/></div>
        <button className={`Todo-li-button ${status}`} onClick={toggleStatus}>{status}</button>
        </>
        )}
        </li>
}

export default ToDoItem