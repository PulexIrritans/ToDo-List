import React, { useState } from 'react';
import {nanoid} from "nanoid";

const Header = ({ add }) => {
    const [newTodo, setNewTodo] = useState({id: "", text:"", status:"Pending"})
    
    const handleInput = (event) => {
        const input = {...newTodo}
        input.text = event.target.value
        input.id = nanoid()
        setNewTodo(input)
    } 

    return (
        <div className="Header">
            <input className="Header-input" onInput={handleInput} type="text" name="" id="" placeholder="My new Toos"/>
            <button className="Header-button" onClick={() => add(newTodo)}>Add</button>
            
        </div>
    )
}

export default Header