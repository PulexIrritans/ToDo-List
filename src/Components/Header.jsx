const Header = ({ add, handleInput, newTodo }) => {
   
    return (
        <>
        <h1>Done is better than perfect</h1>
        <div className="Header">
            <input className="Header-input" onInput={handleInput} type="text" name="" id="" placeholder="My new Todo"/>
            <button className="Header-button" onClick={() => add(newTodo)}>Add</button>
            
        </div>
        </>
    )
}

export default Header