const ToDoItem = ({ text, remove, toggleStatus, status }) => {
    return (
        <>
        <button onClick={remove}>X</button>
        <p>{text}</p>
        <button onClick={toggleStatus}>{status}</button>
        </>
    )
}

export default ToDoItem