import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
let AppLayout = ()=>{
    let loginBtn = "LOGIN";
    const [useLogin,setUseLogin]= useState(loginBtn)
    return (
        <>
    <button onClick={()=>{
        // if (useLogin === "LOGOUT"){
        //     setUseLogin("LOGIN")
        // }else{
        //     setUseLogin("LOGOUT")
        // }
        useLogin==="LOGIN" ? setUseLogin("LOGOUT") : setUseLogin("LOGIN") 
       
    }}>{useLogin}</button>
    </>
    )
}
// let root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<AppLayout/>)

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);