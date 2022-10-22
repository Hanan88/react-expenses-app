import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  return (
    <div>
      <h1>Let's Get Started!</h1>
      <p>This is also visible!</p>
      <NewExpense />
      <Expenses />
    </div>
  );
};

export default App;
