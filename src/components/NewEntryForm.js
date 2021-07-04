import React from "react";
import { Form } from "semantic-ui-react";

// Components
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import EntryForm from "./EntryForm";

// Hooks
import useEntryDetails from "../hooks/useEntryDetails";

const NewEntryForm = () => {
  const {
    description,
    setDescription,
    value,
    setValue,
    isExpense,
    setIsExpense,
    addEntry,
  } = useEntryDetails;
  return (
    <Form unstackable>
      <EntryForm
        description={description}
        isExpense={isExpense}
        value={value}
        setDescription={setDescription}
        setIsExpense={setIsExpense}
        setValue={setValue}
      />

      <ButtonSaveOrCancel addEntry={addEntry} />
    </Form>
  );
};

export default NewEntryForm;
