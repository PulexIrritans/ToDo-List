import React, { useState } from 'react';

const Header = ({ add }) => {
    const [newTodo, setNewTodo] = useState({text:"", status:"PENDING"})
    
    const handleInput = (event) => {
        const input = {...newTodo}
        input.text = event.target.value;
        setNewTodo(input)
    } 

    return (
        <>
            <input onInput={handleInput} type="text" name="" id="" placeholder="My Todos"/>
            <button onClick={() => add(newTodo)}>Add</button>
            
        </>
    )
}

export default Header