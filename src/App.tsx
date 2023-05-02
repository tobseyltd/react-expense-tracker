import { useState } from "react";
import "./App.css";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseFilter from "./components/ExpenseFilter";



function App() {
  const [expenses, setExpenses] = useState([
    { amount: 5, category: "Groceries", description: "Apples", id: 1 },
    { amount: 15, category: "Entertainment", description: "Cinema", id: 2 },
    { amount: 25, category: "Utilites", description: "Electricity", id: 3 },
  ]);

  const categories = ["Groceries", "Entertainment", "Utilites"];

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const handleFilter = (category: string) => {
    setExpenses(expenses.filter((expense) => expense.category === category));
  };

  return (
    <>
      <ExpenseForm
        categories={categories}
        onSubmit={(expense) => {
          setExpenses([...expenses, { ...expense, id: expenses.length + 1 }]);
          console.log(expenses);
        }}
      />
      <ExpenseFilter
        categories={categories}
        onSelectFilter={(category) => handleFilter(category)}
      />
      <ExpenseList expenses={expenses} onDelete={(id) => handleDelete(id)} />
    </>
  );
}

export default App;
