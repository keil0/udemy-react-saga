import React from "react";
import { Grid, Icon, Segment } from "semantic-ui-react";
import { useDispatch } from "react-redux";

// Actions
import { removeEntryRedux } from "../actions/entries.actions";
import { openEditModal } from "../actions/modals.actions";

const EntryLine = ({ id, isExpense, description, value }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Segment color={isExpense ? "red" : "green"}>
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column widht={10} textAlign="left">
              {description}
            </Grid.Column>
            <Grid.Column widht={3} textAlign="right">
              ${value}
            </Grid.Column>
            <Grid.Column widht={3}>
              <Icon
                name="edit"
                bordered
                onClick={() => dispatch(openEditModal(id))}
              />
              <Icon
                name="trash"
                bordered
                onClick={() => dispatch(removeEntryRedux(id))}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
};

export default EntryLine;
