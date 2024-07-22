import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
// let num = 0;
// const App =()=>{
//     const [numAdd,setNumAdd]=useState(num)
// return(
//     <button onClick={()=>{
//         setNumAdd(numAdd+1)
//     }}>Click to Add {numAdd}</button>
// )
// }
// let root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<App/>)

let App = () => {
  let num = 0;
  const [addNum, setAddNum] = useState(num);
  return (
    <button
      onClick={() => {
        setAddNum(addNum + 1);
      }}
    >
      Click to add {addNum}
    </button>
  );
};
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
