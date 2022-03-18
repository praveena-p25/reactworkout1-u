import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseTest from "../Workout/ExpenseTest";
import "./NewExpense.css";
import Addbuttononclick from "../Workout/Addbuttononclick";

const NewExpense = (props) => {
  const OnSaveHandler = (enteredExpensedata) => {
    const expensedata = {
      ...enteredExpensedata,
      id: Math.random().toString(),
    };
    props.onAddExpense(expensedata);
    setIsEditing(false);
  };

  const [isEditing, setIsEditing] = useState();

  const startexpensebuttonHandler = () => {
    setIsEditing(true);
  };

  const stopHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      <ExpenseTest></ExpenseTest>
      <Addbuttononclick></Addbuttononclick>
      {!isEditing && (
        <button onClick={startexpensebuttonHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={OnSaveHandler}
          onCancel={stopHandler}
        ></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;
