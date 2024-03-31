// import React from "react";
// import ReactDOM from "react-dom";
// import { useState } from "react";

// let AppLayout = () => {
//   let [counter,setCounter]=useState(0)
//   // let counter = 0;
//   const addValue = () => {

//     setCounter( counter =counter+1);
//   };
//   const removeValue = () => {

//     // if(counter !==0){setCounter(counter=counter-1);}
//     // else return
//            //OR
//     if(counter === 0) return;
//     else{setCounter(counter -=1)}
//   };
//   return (
//     <div className="main">
//       <h1 className="head">React Counter</h1>
//       <h2>Counter Value:{counter}</h2>
//       <button onClick={addValue}>Add Value</button>
//       <br />
//       <button onClick={removeValue}>remove Value</button>
//     </div>
//   );
// };
// let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);

import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";

let AppLayout=()=>{
  let [counter,setCounter]=useState(0)
  let addValue=()=>{
    setCounter(counter=counter+1);
  }

let removeValue=()=>{

}

  return (
    <div className="main">
      <h1>React Counter:{counter}</h1>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </div>
  )
}

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
