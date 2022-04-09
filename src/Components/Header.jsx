const Header = ({ add, handleInput, newTodo }) => {
   
    return (
        <div className="Header">
            <input className="Header-input" onInput={handleInput} type="text" name="" id="" placeholder="My new Todos"/>
            <button className="Header-button" onClick={() => add(newTodo)}>Add</button>
            
        </div>
    )
}

export default Header