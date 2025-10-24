import React from 'react';
import '../styles/ExpenseList.css';

const ExpenseList = ({ groupedExpenses, handleDelete }) => {
  return (
    <div className="expense-list">
      <h3>Your Spendings</h3>
      {Object.keys(groupedExpenses).length === 0 ? (
        <p>No expenses yet.</p>
      ) : (
        Object.keys(groupedExpenses)
          .sort((a, b) => new Date(b.split("/").reverse().join("-")) - new Date(a.split("/").reverse().join("-")))
          .map((date) => (
            <div key={date} className="date-group">
              <h4 className="date-header">{date}</h4>
              <ul className="expense-items">
                {groupedExpenses[date].map((expense) => (
                  <li key={expense.id} className="expense-item">
                    <span className="expense-reason">{expense.reason}</span>
                    <span className="expense-amount">₹{expense.amount}</span>
                    <button
                      onClick={() => handleDelete(expense.id)}
                      className="delete-button"
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))
      )}
    </div>
  );
};

export default ExpenseList;