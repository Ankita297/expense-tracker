import React from 'react'
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm" 

const NewExpense = (props) => {

    const expenseHandler=(data)=>{
      const newExpense={
          ...data,
          _id:Math.random()
              }
              console.log(data)
              props.newExpense(newExpense);

    }

   


    return (
        <div className="new-expense">
        <ExpenseForm  submitExpense={expenseHandler}/>
        </div>
    )
}

export default NewExpense
