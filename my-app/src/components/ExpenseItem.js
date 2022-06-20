import React from "react";
import './ExpenseItem.css';

const ExpenseItem = () => {
  return (
    <div className="expense-item">
      <div>June 20th 2022</div>
      <div className="expense-item__description">
        <h2>Monthly Udemy Learning</h2>
      </div>
      <div className="expense-item__price">£26.99</div>
    </div>
  );
};

export default ExpenseItem;
