// const heading = React.createElement("h1",{id:"heading"},"Hello World from React!"); //! React.createElement is a object
// // console.log(heading) //! This is not a h1 tag this will return object.
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading) //! render job is to take that js object, create that or convert it into the h1 tag which the browser understands and put it up inside the root element(id) or DOM.
// //! Never ever think that when we are doing React.createElement it is creating some HTML..No it is creating an object. While it is rendering on the DOM it converts itself into the HTML and put it up into the DOM.

// // ! Nested elements in react:
// let parent=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{},"hello there!")))
// let root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(parent)

//! Adding sibling to any tag:
// ! if we want to add more siblings to any tag then we have to rap them up in a array:

let parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "this is h1 tag"),
    React.createElement("h2", {}, "this is h2 tag"),
  ])
);
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//! if we have more then one child to main div:

// let parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {}, "this is an h1 tag!"),
//     React.createElement("h2", {}, "this is an h2 tag!"),
//   ]),
//   React.createElement("div", { id: "child2" }, "this is text from child2:"),
// ]);
// let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent); 

//! this code is look like a mess and its very difficult to read the code to tackle this issue we have something known as JSX:
//! so above is the core of reactJS.
//? React can work independently in a small portion of our app that is why it is called a library. So if we want to add react in header them we just have to makae header as root.
//? in the end react is just a javascript, it is just giving us some helper methods that we need to use to develop faster applications.