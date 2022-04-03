import React, { useState } from 'react';

const Header = ({ add }) => {
    const [newTodo, setNewTodo] = useState({text:"", status:"PENDING"})
    
    const handleInput = (event) => {
        const input = {...newTodo}
        input.text = event.target.value;
        setNewTodo(input)
    } 

    return (
        <div className="Header">
            <input className="Header-input" onInput={handleInput} type="text" name="" id="" placeholder="My Todos"/>
            <button className="Header-button" onClick={() => add(newTodo)}>Add</button>
            
        </div>
    )
}

export default Header