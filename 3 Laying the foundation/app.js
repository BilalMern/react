import React from "react";
import ReactDOM  from "react-dom/client";

//! Creating h1 tag using jsx. 
//! jsx is not html in js jsx is a html like syntax.

let jsxHeading=<h1>This is h1 tag in jsx!</h1> //! this will also give object and this code is not pure js code and not browser readable parcel is doing the job to make it browser readable thats why the code is working perfectly fine. here parcel tranpiled the code before it reaches to js engine, transpiled means conversion. parcel is not tranpiled the code by itself it gives the responsibility of transpilation to a package which is known as babel. jsx is behind the scenes work as React.createElement

let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(jsxHeading)