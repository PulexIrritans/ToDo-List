import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ToDoItem from "./Components/ToDoItem";
import Filter from "./Components/Filter";
import React, { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const filter = [
    { name: "All", status: "On" },
    { name: "Pending", status: "Off" },
    { name: "Done", status: "Off" },
  ];

  const [newTodo, setNewTodo] = useState({
    id: "",
    text: "",
    status: "Pending",
  });
  const [todoItemsList, setTodoItemsList] = useState([]);
  const [filterStatus, setFilterStatus] = useState("All");

  const handleInput = (event) => {
    const input = { ...newTodo };
    input.text = event.target.value;
    input.id = nanoid();
    setNewTodo(input);
  };

  const add = (event, todo) => {
    event.preventDefault();
    event.target.reset()
    const newItems = [...todoItemsList];
    newItems.push(todo);
    setTodoItemsList(newItems);
  };

  const updateTodoList = (id, updatedTodoText) => {
    const updatedTodoList = todoItemsList.map(item => item.id === id ? {...item, text: updatedTodoText} : item)
    setTodoItemsList(updatedTodoList)
  }

  const remove = (number) => {
    const newItems = todoItemsList.filter((item) => item.id !== number);
    setTodoItemsList(newItems);
  };

  const toggleStatus = (number) => {
    const newItems = todoItemsList.map((item) => {
      if (item.id === number) {
        return {
          ...item,
          status: item.status === "Done" ? "Pending" : "Done",
        };
      } else {
        return item;
      }
    });
    setTodoItemsList(newItems);
  };

  const showfilter = (name) => {
    setFilterStatus(name);
  };

  return (
    <div className="App">
      <Header add={add} handleInput={handleInput} newTodo={newTodo} />
      <main className="Main">
        <Filter
          filter={filter}
          showfilter={showfilter}
          filterStatus={filterStatus}
        />
        <ul className="Todo-ul">
          {todoItemsList
            .filter(
              (item) => filterStatus === "All" || item.status === filterStatus
            )
            .map((item) => (
              <ToDoItem
                key={item.id}
                id={item.id}
                text={item.text}
                status={item.status}
                remove={() => remove(item.id)}
                toggleStatus={() => toggleStatus(item.id)}
                filterStatus={filterStatus}
                updateTodoList={updateTodoList}
              />
            ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}

export default App;
