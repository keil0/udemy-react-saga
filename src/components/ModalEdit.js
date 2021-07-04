import React from "react";
import { Button, Form, Modal } from "semantic-ui-react";
import { useDispatch } from "react-redux";

// Components
import EntryForm from "./EntryForm";

// Actions
import { closeEditModal } from "../actions/modals.actions";
import useEntryDetails from "../hooks/useEntryDetails";

const ModalEdit = ({ isOpen, description, value, isExpense, id }) => {
  const dispatch = useDispatch();
  const entryUpdate = useEntryDetails(description, value, isExpense);

  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit Entry</Modal.Header>
      <Modal.Content>
        <Form unstackable>
          <EntryForm
            setDescription={entryUpdate.setDescription}
            setIsExpense={entryUpdate.setIsExpense}
            setValue={entryUpdate.setValue}
            description={entryUpdate.description}
            value={entryUpdate.value}
            isExpense={entryUpdate.isExpense}
          />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => dispatch(closeEditModal())}>Close</Button>
        <Button onClick={() => entryUpdate.updateEntry(id)} primary>
          Ok
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ModalEdit;
