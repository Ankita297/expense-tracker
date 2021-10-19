import React,{useState} from 'react'
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm" 

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const expenseHandler=(data)=>{
      const newExpense={
          ...data,
          _id:Math.random()
              }
              console.log(data)
              props.newExpense(newExpense);
              setIsEditing(false);

    }

   
    const startEditingHandler = () => {
        setIsEditing(true);
      };
    
      const stopEditingHandler = () => {
        setIsEditing(false);
      };
    

    return (
        <div className="new-expense">
        {!isEditing&&
            <button onClick={startEditingHandler}>Add New Expense</button>
        }
        {isEditing&&
            <ExpenseForm  submitExpense={expenseHandler} 
                onCancel={stopEditingHandler}
            />

        }
        </div>
    )
}

export default NewExpense
