import React from "react";

const SpecialButton = props => {
  return <button {...props.special}>{props.special}</button>;
};

export default SpecialButton;
