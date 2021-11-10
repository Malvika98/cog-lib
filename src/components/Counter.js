import React, { useState } from "react";
import Button from "./Button";

const Counter = () => {
  let [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="titles">
      <h1>Couter: {counter}</h1>
      <div style={{ display: "inline" }}>
        <Button className="btn" value="+" func={increment}></Button>
        <Button className="btn" value="-" func={decrement}></Button>
      </div>
    </div>
  );
};

Counter.propTypes = {};

export default Counter;
