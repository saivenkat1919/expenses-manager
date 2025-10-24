import React from 'react';
import '../styles/ExpenseForm.css';

const ExpenseForm = ({ reason, amount, setReason, setAmount, handleAdd }) => {
  return (
    <div className="expense-form">
      <input
        type="text"
        placeholder="Reason"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        className="input"
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="input"
      />
      <button onClick={handleAdd} className="add-button">Add</button>
    </div>
  );
};

export default ExpenseForm;