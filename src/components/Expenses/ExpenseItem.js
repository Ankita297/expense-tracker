import React,{useState} from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
const ExpenseItem = (props) => {

const [title, settitle] = useState(props.title)

  const handleClick=()=>{
  
    settitle("clicked")
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}  />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={handleClick}>Click me</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
