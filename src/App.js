import { Container } from "semantic-ui-react";

import "./App.css";

import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLine from "./components/EntryLine";

function App() {
  return (
    <Container>
      <MainHeader title="Budget" type="h1" />
      <DisplayBalance title="Your Balance" value="2,550.53" size="small" />
      <DisplayBalances />
      <MainHeader title="History" type="h3" />
      <EntryLine text="Something" value="50.00" />
      <EntryLine isExpense text="Something" value="100.00" />
      <EntryLine text="Something" value="20.00" />
      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm />
    </Container>
  );
}

export default App;
