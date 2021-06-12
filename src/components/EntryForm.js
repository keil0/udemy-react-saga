import React from "react";
import { Checkbox, Form, Segment } from "semantic-ui-react";

const EntryForm = ({
  description,
  setDescription,
  value,
  setValue,
  isExpense,
  setIsExpense,
}) => {
  return (
    <>
      <Form.Group>
        <Form.Input
          icon="tags"
          width={12}
          label="Description"
          placeholder="New shinny thing"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Form.Input
          width={4}
          label="Value"
          placeholder="100.00"
          icon="dollar"
          iconPosition="left"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Form.Group>

      <Segment compact>
        <Checkbox
          label="is expense"
          toggle
          checked={isExpense}
          onChange={() => setIsExpense(!isExpense)}
        />
      </Segment>
    </>
  );
};

export default EntryForm;
