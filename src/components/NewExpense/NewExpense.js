import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [open, setOpen] = useState(false);

  const SaveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    // console.log(expenseData, "expenseData");
  };

  return (
    <div className="new-expense">
      {open === false ? (
        <button onClick={() => setOpen(true)}>Add New Expense</button>
      ) : (
        <ExpenseForm onSaveExpenseData={SaveExpenseData} setOpen={setOpen}/>
      )}
    </div>
  );
};

export default NewExpense;
