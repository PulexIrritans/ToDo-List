import { useState } from 'react'
import {ReactComponent as TrashLogo} from '../trash.svg'
import {ReactComponent as EditLogo} from '../edit.svg'
import {ReactComponent as ConfirmLogo} from '../confirm.svg'
import {ReactComponent as CancelLogo} from '../cancel.svg'

const ToDoItem = ({ id, text, remove, toggleStatus, status, updateTodoList }) => {

const [editMode, setEditMode] = useState(false)
const [itemTodoText, setItemTodoText] = useState(text)


const handleUpdateText = (event) => {
    const newText = event.target.value
    setItemTodoText(newText)
  }

    return  <li className="Todo-li">
        {editMode ? (
                 <>
                 <input onInput={(event) => handleUpdateText(event, id)} value={itemTodoText} style={{flex: 1}}></input>
                 <button onClick={() =>{setEditMode(false); updateTodoList(id, itemTodoText)}}><ConfirmLogo style={{width: "20px"}}/></button>
                 <button onClick={() =>setEditMode(false)}><CancelLogo style={{width: "20px"}}/></button>
                 </>
        ) : (
        <>
        <button className="Trash-button" onClick={remove}><TrashLogo className="Trash-svg"/></button>
        <p style={{flex: 1}}>{text}</p>
        <div onClick={() =>setEditMode(true)}><EditLogo style={{width: "20px"}}/></div>
        <button className={`Todo-li-button ${status}`} onClick={toggleStatus}>{status}</button>
        </>
        )}
        </li>
}

export default ToDoItem