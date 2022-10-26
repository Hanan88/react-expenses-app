import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const onChangeTitle = () => {
    setTitle("UPDATED!!!");
    console.log(title);
  };
  // console.log(props.filteredYear, "fromItem");
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={onChangeTitle}>Change titles</button>
    </Card>
  );
};

export default ExpenseItem;
