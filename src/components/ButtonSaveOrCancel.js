import React from "react";
import { Button } from "semantic-ui-react";

const ButtonSaveOrCancel = () => {
  return (
    <div>
      <Button.Group>
        <Button>Cancel</Button>
        <Button.Or />
        <Button primary>Ok</Button>
      </Button.Group>
    </div>
  );
};

export default ButtonSaveOrCancel;
