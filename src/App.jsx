import "./App.css";
import Header from './Components/Header';
import Footer from './Components/Footer';
import ToDoItem from "./Components/ToDoItem";
import Filter from "./Components/Filter";
import React, { useState } from 'react';

function App() {

  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState([{name: "All", status: "On"}, {name: "Active", status: "Off"}, {name: "Completed", status: "Off"}]);

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
    newItems[number].status === "PENDING" ? newItems[number].status = "COMPLETED" : newItems[number].status = "PENDING"
    setItems(newItems)
  }

  const showfilter = (number) => {
    const newfilter = [...filter]
    newfilter.forEach((item) => item.status = "Off")
    newfilter[number].status = "On"
    setFilter(newfilter)

   
    
    

    //const newItems = items.filter((index) => index !== number)

  }

  return (
    <div className="App">
      <Header add={add} className="header"/>
      <main className="Main">
        <Filter filter={filter} showfilter={showfilter} className="Filter"/>
        <ul className="Todo-ul">
          {items.map((item, index) => (<li className="Todo-li" key={index}><ToDoItem text={item.text} status={item.status} remove={() => remove(index)} toggleStatus={() => toggleStatus(index)}/></li>))}
        </ul>
      </main>
      <Footer className="footer"/>
    </div>
  );
}

export default App;
