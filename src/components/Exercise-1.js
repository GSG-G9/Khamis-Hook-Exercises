import React, { useState } from "react";

function One() {
  const [Count, setCount] = useState(0);

  const Increment = () => {
    setCount(v => v + 1);
  };

  const Reset = () => {
    setCount(v => 0);
  };

  const Decrement = () => {
    setCount(v => v - 1);
  };

  return (
    <>
      <button onClick={Increment}>Increment + </button>
      <button onClick={Reset}>Reset</button>
      <button onClick={Decrement}>Decrement - </button>
      <h4>Count is {Count}</h4>
    </>
  );
}

export default One;
