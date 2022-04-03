import "./App.css";
import Header from './Components/Header';
import Footer from './Components/Footer';
import ToDoItem from "./Components/ToDoItem";
import Filter from "./Components/Filter";
import React, { useState } from 'react';

function App() {
  const filter = ([{name: "All", status: "On"}, {name: "Pending", status: "Off"}, {name: "Done", status: "Off"}]);

  const [items, setItems] = useState([]);
  const [filterStatus, setFilterStatus] = useState("All");

  // DO NOT Delete item from the filter function - it won't work!!
  const remove = (number) => {
    const newItems = items.filter((item, index) => index !== number)
    setItems(newItems)
  }

  const add = (todo) => {
    const newItems = [...items]
    newItems.push(todo)
    setItems(newItems)
  }

  const toggleStatus = (number) => {
    const newItems = [...items]
    newItems[number].status === "Pending" ? newItems[number].status = "Done" : newItems[number].status = "Pending"
    setItems(newItems)
  }

  const showfilter = (name) => {
    setFilterStatus(name)
  }

  return (
    <div className="App">
      <Header add={add}/>
      <main className="Main">
        <Filter filter={filter} showfilter={showfilter} filterStatus={filterStatus} className="Filter"/>
        <ul className="Todo-ul">
          {items.map((item, index) => <ToDoItem key={index} text={item.text} status={item.status} remove={() => remove(index)} toggleStatus={() => toggleStatus(index)} filterStatus={filterStatus}/>)}
        </ul>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
