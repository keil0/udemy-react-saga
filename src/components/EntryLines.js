import React from "react";
import { Container } from "semantic-ui-react";

import EntryLine from "./EntryLine";

const EntryLines = ({ entries, deleteEntry }) => {
  return (
    <Container>
      {entries.map((entry) => (
        <EntryLine key={entry.id} deleteEntry={deleteEntry} {...entry} />
      ))}
    </Container>
  );
};

export default EntryLines;
