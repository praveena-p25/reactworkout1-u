import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import { useState } from "react";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);
  // console.log("evauated by react");

  // const clickHandler = () => {
  //   setTitle("updated");
  //   console.log(title);
  // };
  // const saras = "this is saras";
  return (
    // <div className="expense-item">
    //   <ExpenseDate date={props.date} saras={saras}></ExpenseDate>
    //   <div className="expense-item__description">
    //     <h2>{title}</h2>
    //     <div className="expense-item__price">${props.amount}</div>
    //   </div>
    //   <button onClick={clickHandler}>change title</button>
    // </div>
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};
export default ExpenseItem;
