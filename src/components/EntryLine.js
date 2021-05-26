import React from "react";
import { Grid, Icon, Segment } from "semantic-ui-react";

const EntryLine = ({ id, isExpense, description, value, deleteEntry }) => {
  return (
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
            <Icon name="edit" bordered />
            <Icon name="trash" bordered onClick={() => deleteEntry(id)} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default EntryLine;
