import React from "react";
import { Statistic } from "semantic-ui-react";

const DisplayBalance = ({ title, value, color = "black", size = "tiny" }) => {
  return (
    <Statistic color={color} size={size}>
      <Statistic.Label style={{ textAlign: "Left" }}>{title}:</Statistic.Label>
      <Statistic.Value>{value}</Statistic.Value>
    </Statistic>
  );
};

export default DisplayBalance;
