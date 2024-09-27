// import React from "react";
// import ReactDOM from "react-dom/client";
// import Header from "./components/Header"; //! when we are importing a component then giving a file extension is not necessary.
// import Body from "./components/Body";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import { createBrowserRouter } from "react-router-dom";
// import { RouterProvider } from "react-router-dom";
// import { Outlet } from "react-router-dom";


// let AppLayout = () => {
//   return (
//     <div className="app">
//       <Header />
//       <Outlet />  
//       {/* This Outlet will be filled with the children according to the path of which page we are on.    */}
//     </div>
//   );
// };
// const appRouter = createBrowserRouter([
//   {
//     path:"/",
//     element:<AppLayout/>,
//     children:[
//       {
//         path: "/",
//         element:<Body/>
//       },
//       {
//         path: "/about",
//         element: <About/>
//         },
//         {
//           path: "/contact",
//           element: <Contact/>
//         }
//     ]
//   },
  
// ]) //Here AppLayout has three childrens and we want to load these childrens according to the path.

// let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<RouterProvider router={appRouter}/>);



import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"; //! when we are importing a component then giving a file extension is not necessary.
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import { createBrowserRouter} from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";

let AppLayout = () => {
  return (
    <div className="app">
      <Header />
       <Outlet/>
     
    </div>
  );
};
const appRouter = createBrowserRouter([

{
      path:"/",
      element:<AppLayout/>,
      children:[
        {
          path: "/",
          element:<Body/>
        },
        {
          path: "/about",
          element: <About/>
          },
          {
            path: "/contact",
            element: <Contact/>
          }
    ]},
  
])
  


let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

