import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"; //! when we are importing a component then giving a file extension is not necessary.
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; //! this will create routing configuration.



let AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>
  },
  {
    path: "/about",
    element: <About />
  },
])
let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router = {appRouter} />)
