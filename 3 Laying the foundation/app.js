import React from "react";
import ReactDOM from "react-dom/client";

//! Jsx:
//* Creating h1 tag using jsx.
//? jsx is not html in js jsx is a html like syntax.

// let jsxHeading=<h1>This is h1 tag in jsx!</h1> //* this will also give object and this code is not pure js code and not browser readable parcel is doing the job to make it browser readable thats why the code is working perfectly fine. here parcel tranpiled the code before it reaches to js engine, transpiled means conversion. parcel is not tranpiled the code by itself it gives the responsibility of transpilation to a package which is known as babel. jsx is behind the scenes work as React.createElement

// let root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(jsxHeading)

//! Function Components in React:
//? Function component is a normal js function which returns some peace of JSX some JSX element OR A function which returns a react element. a name of function must start with capital letter.
// let FunctionHeading = ()=>{
//     return <h1>This is function component</h1>
// }
//OR (both ways are true.)
// let FunctionHeading =()=>(
//     <h1 className="header">This is header</h1>
// )
// let root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<FunctionHeading />) //!This is the syntax to render a functional component.

//! calling a functional component inside functional component is known as component composition.
//* Component Composition:
// let FunctionComp =()=>(
//      <h3>rendering a component inside component</h3>
// )

// let MainFunc =()=>(
//     <div>
//    <h1>This is main function</h1>
//     <FunctionComp/>
//     </div>
// )
// let root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<MainFunc/>)

//! If we put {} anywhere in our JSX then we can run any kind of js expression in these parenthesis:
// const num = 123;
// let FuncComp=()=>(
//     <div>
//     <h1>Hello there!</h1>
//     < SecondFunc/> or {SecondFunc()} or <SecondFun></SecondFunc>
//     </div>
// )
// let SecondFunc=()=>(
//     <div>
//     <h3>Second Func</h3>
//    <h2>{num}</h2>
//     </div>
// )
// let root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(< FuncComp />)

//! Calling an react element in component.
// let reactElement = <h3>Hello this is React Element!</h3>

// let Compo = ()=>(
//     <div>
//     <h1>This is functional component</h1>
//     {reactElement}
//     </div>
// )
// let root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<Compo/>)

//! Different ways of calling component:

let Comp = () => <h1>Hello there!</h1>;
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Comp />);
root.render(<Comp></Comp>);
root.render(Comp());
