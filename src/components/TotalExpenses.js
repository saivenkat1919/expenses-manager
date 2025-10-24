import React from 'react';
import '../styles/TotalExpenses.css';

const TotalExpenses = ({ total }) => {
  return (
    <div className="total-expenses">
      <h2>Total: ₹{total.toFixed(2)}</h2>
    </div>
  );
};

export default TotalExpenses;