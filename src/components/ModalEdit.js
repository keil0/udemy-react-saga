import React from "react";
import { Button, Form, Modal } from "semantic-ui-react";

import EntryForm from "./EntryForm";

const ModalEdit = ({
  isOpen,
  setIsOpen,
  setDescription,
  setIsExpense,
  setValue,
  description,
  value,
  isExpense,
}) => {
  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit Entry</Modal.Header>
      <Modal.Content>
        <Form unstackable>
          <EntryForm
            setDescription={setDescription}
            setIsExpense={setIsExpense}
            setValue={setValue}
            description={description}
            value={value}
            isExpense={isExpense}
          />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setIsOpen(false)}>Close</Button>
        <Button primary onClick={() => setIsOpen(false)}>
          Ok
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ModalEdit;
