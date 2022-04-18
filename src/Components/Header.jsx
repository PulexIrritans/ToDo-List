const Header = ({ add, handleInput, newTodo }) => {
   
    return (
        <>
        <h1>Done is better than perfect</h1>
        <form onSubmit={(event) => add(event,newTodo)} className="Header">
            <input className="Header-input" onInput={handleInput} type="text" name="" id="" placeholder="My new Todo"/>
            <button className="Header-button">Add</button>
            
        </form>
        </>
    )
}

export default Header