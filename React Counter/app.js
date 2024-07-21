import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
let num = 0;
const App =()=>{
    const [numAdd,setNumAdd]=useState(num)
return(
    <button onClick={()=>{
        setNumAdd(numAdd+1)
    }}>Click to Add {numAdd}</button>
)
}
let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)