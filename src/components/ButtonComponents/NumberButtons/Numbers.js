import React, { useState } from "react";
import NumberButton from "./NumberButton";
//import any components needed

//Import your array data to from the provided data file
import { numbers } from "../../../data";

const Numbers = props => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers);

  return (
    <div>
      {numbers.map(number => (
        <NumberButton key={number} number={number} />
      ))}
    </div>
  );
};

export default Numbers;

/* STEP 3 - Use .map() to iterate over your array data and return a button
 component matching the name on the provided file. Pass
 it any props needed by the child component*/
