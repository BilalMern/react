import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Error from "./Components/Error";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
const AppLayout = () => {
  return (
    <div className="app">
      <Header />

      <Body />
    </div>
  );
};

const reactRout=createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>
  },
  {
    path: "/about",
    element: <About/>
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);

