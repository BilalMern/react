import React from "react";
import ReactDOM from "react-dom";

let AppLayout = () => {
  return (
    <div>
      <h1 className="head">React Counter</h1>
      <h2>Counter Value:0</h2>
      <button>Add Value</button><br />
      <button>remove Value</button>
    </div>
  );
};
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
