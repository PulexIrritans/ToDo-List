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
    const newItems = items.filter((item) => item.id !== number)
    setItems(newItems)
  }

  const add = (todo) => {
    const newItems = [...items]
    newItems.push(todo)
    setItems(newItems)
  }

  const toggleStatus = (number) => {
    const newItems = items.map((item => {if (item.id === number) {return {
      ...item,
      status: item.status==="Done" ? "Pending" : "Done"}} else {return item}}))
    setItems(newItems)
  }

  const showfilter = (name) => {
    setFilterStatus(name)
  }

  return (
    <div className="App">
      <Header add={add}/>
      <main className="Main">
        <Filter filter={filter} showfilter={showfilter} filterStatus={filterStatus}/>
        <ul className="Todo-ul">
          {items.filter((item => filterStatus==="All" || item.status ===filterStatus)).map((item) => <ToDoItem key={item.id} text={item.text} status={item.status} remove={() => remove(item.id)} toggleStatus={() => toggleStatus(item.id)} filterStatus={filterStatus}/>)}
        </ul>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
