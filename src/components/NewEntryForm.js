import React from "react";
import { Form } from "semantic-ui-react";

import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import EntryForm from "./EntryForm";

const NewEntryForm = ({
  addEntry,
  description,
  setDescription,
  isExpense,
  setIsExpense,
  value,
  setValue,
}) => {
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
