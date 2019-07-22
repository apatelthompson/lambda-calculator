import React, { useState } from "react";
import OperatorButton from "./OperatorButton";
//import any components needed

//Import your array data to from the provided data file
import { operators } from "../../../data";

const Operators = props => {
  // STEP 2 - add the imported data to state
  const [operatorState, setOperatorState] = useState(operators);

  // const changeOperator = () => {
  //   setOperatorState(operatorState);
  // };

  return (
    <div>
      {operators.map(operator => (
        <OperatorButton key={operator} operator={operator} />
      ))}
    </div>
  );
};

export default Operators;

/* STEP 3 - Use .map() to iterate over your array data and return a button
 component matching the name on the provided file. Pass
 it any props needed by the child component*/
