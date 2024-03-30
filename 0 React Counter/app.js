import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";

let AppLayout = () => {
  let [counter,setCounter]=useState(0)
  // let counter = 0;
  const addValue = () => {
   
    setCounter( counter =counter+1);
  };
  const removeValue = () => {
    setCounter(counter=counter-1);
  };
  return (
    <div>
      <h1 className="head">React Counter</h1>
      <h2>Counter Value:{counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>remove Value</button>
    </div>
  );
};
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
