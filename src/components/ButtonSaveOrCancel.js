import React from "react";
import { Button } from "semantic-ui-react";

const ButtonSaveOrCancel = ({ addEntry }) => {
  return (
    <div>
      <Button.Group>
        <Button>Cancel</Button>
        <Button.Or />
        <Button primary onClick={() => addEntry()}>
          Ok
        </Button>
      </Button.Group>
    </div>
  );
};

export default ButtonSaveOrCancel;
