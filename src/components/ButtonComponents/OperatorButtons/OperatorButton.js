import React from "react";

const OperatorButton = props => {
  return <button className="operatorButton">{props.operator.char}</button>;
};

export default OperatorButton;
