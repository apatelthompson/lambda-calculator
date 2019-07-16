import React from "react";

const NumberButton = props => {
  return <button {...props.number}>{props.number}</button>;
};

export default NumberButton;
