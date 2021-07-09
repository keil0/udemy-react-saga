import React, { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";

// Components
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";

// Actions
import { getAllEntries } from "./actions/entries.actions";

function App() {
  const dispatch = useDispatch();
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [entry, setEntry] = useState({});

  const entries = useSelector((state) => state.entries);
  const { isOpen, id } = useSelector((state) => state.modals);

  useEffect(() => {
    const index = entries.findIndex((entry) => entry.id === id);
    setEntry(entries[index]);
  }, [isOpen, id, entries]);

  // Compute totals
  useEffect(() => {
    let totalIncomes = 0;
    let totalExpenses = 0;
    entries.map((entry) => {
      if (entry.isExpense) {
        return (totalExpenses += Number(entry.value));
      } else {
        return (totalIncomes += Number(entry.value));
      }
    });
    setTotal(totalIncomes - totalExpenses);
    setExpenseTotal(totalExpenses);
    setIncomeTotal(totalIncomes);
  }, [entries]);

  useEffect(() => {
    dispatch(getAllEntries());
  }, [dispatch]);

  return (
    <Container>
      <MainHeader title="Budget" type="h1" />
      <DisplayBalance title="Your Balance" value={total} size="small" />
      <DisplayBalances expenseTotal={expenseTotal} incomeTotal={incomeTotal} />
      <MainHeader title="History" type="h3" />
      <EntryLines entries={entries} />
      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm />
      <ModalEdit isOpen={isOpen} {...entry} />
    </Container>
  );
}

export default App;
