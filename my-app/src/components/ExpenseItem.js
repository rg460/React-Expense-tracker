import React from "react";
import './ExpenseItem.css';

const ExpenseItem = () => {
    const expenseDate = new Date(2022,6,20);
    const expenseTitle = 'Monthly Udemy Learning'
    const expenseAmount = 26.99;
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
      </div>
      <div className="expense-item__price">{expenseAmount}</div>
    </div>
  );
};

export default ExpenseItem;
