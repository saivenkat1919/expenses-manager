import { useEffect, useState } from "react";
import { db } from "./firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import TotalExpenses from "./components/TotalExpenses";
import "./styles/App.css";

export default function App() {
  const [reason, setReason] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const expensesRef = collection(db, "expenses");

  const fetchExpenses = async () => {
    const snapshot = await getDocs(expensesRef);
    const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setExpenses(list);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const handleAdd = async () => {
    if (!reason || !amount) {
      alert("Please enter both reason and amount");
      return;
    }

    await addDoc(expensesRef, {
      reason,
      amount: parseFloat(amount),
      date: new Date().toLocaleDateString("en-GB"),
    });

    setReason("");
    setAmount("");
    fetchExpenses();
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "expenses", id));
    fetchExpenses();
  };

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  const groupedExpenses = expenses.reduce((groups, expense) => {
    const date = expense.date || "Unknown Date";
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(expense);
    return groups;
  }, {});

  return (
    <div className="app-container">
      <h1 className="app-title">💸 Expense Tracker</h1>
      
      <ExpenseForm
        reason={reason}
        amount={amount}
        setReason={setReason}
        setAmount={setAmount}
        handleAdd={handleAdd}
      />

      <ExpenseList
        groupedExpenses={groupedExpenses}
        handleDelete={handleDelete}
      />

      <TotalExpenses total={total} />
    </div>
  );
}
