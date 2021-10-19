import React,{useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";
import ExpesnesChart from "./ExpesnesChart";
import ExpenseFilter from "./ExpenseFilter"
const Expense = (props) => {
const [year, setYear] = useState('')
  const yearHandler=(year)=>{
  console.log(year);
  setYear(year);
  }


  const newExpense=props.expenses.filter((expense)=>{
    return expense.date.getFullYear()==year ;
  })

  return (
    <Card className="expenses">
    <ExpenseFilter selected={year} year={yearHandler}/>
<ExpesnesChart expenses={newExpense}/>
  <ExpenseList  expenseList={newExpense}/>    
    </Card>
  );
};

export default Expense;
