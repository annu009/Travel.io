import React from "react";
import { link } from "react-router-dom";
import "./Navbar2.css";
import "./ToDo";
import "./PlanTheDay";


function Navbar2() {
  return (
    <nav className="navbar2">
      <ul>
        <li>
          <img src="assets/home.svg" alt="img" />
           <a href="#home">Search All</a>
        </li>
        <li>
          <img src="assets/hotel.svg" alt="img" />
          <a href="/hotels">Hotels</a>
        </li>
        <li>
          <img src="assets/food.svg" alt="img" />
          <a href="/ToDo">To Do</a>
        </li>
        <li>
          <img src="assets/boat.svg" alt="img" />
          <a href="/Vacation">Vacation</a>
        </li>
        <li>
          <img src="assets/todo.svg" alt="img" />
          <a href="/PlanTheDay">Plan The Day</a>
        </li>
       
      </ul>
    </nav>
  );
}

export default Navbar2;
