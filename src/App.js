import React,{useState} from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/Expenses/NewExpenses/NewExpense"
const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenseList, setExpenseList] = useState(expenses)

  const expenseHandler = (data) => {
    
  setExpenseList((prevExpense)=>{
    return [data,...prevExpense]
  })
    
  };


  return (
    <div>
      <NewExpense newExpense={expenseHandler} />
      <Expense expenses={expenseList} />
    </div>
  );
};

export default App;
