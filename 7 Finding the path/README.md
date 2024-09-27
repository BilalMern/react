We will see how we can create different routes insides our React application. We will be using npm javaScript library known as React Router Dom. This is one of the most popular libraries. We will install this library in our code or project by using npm package for that we have to write a command: 
npm i react-router-dom

We have to create Routing configuration in our root component which is AppLayout. So whenever we have to develops routes we have to create a routing configuration. (Basically Configuration means that some information that will define what will happen on a specific route means information that will tell the browserRouter that what will happen on a specific path). For that we have to import { createBrowserRouter } from "react-router-dom"  
this createBrowserRouter will create a routing configuration for us.

Now we have to create routing configuration inside our app router. Basically we are developing a router and we have to pass configuration inside createBrowserRouter i.e:

const appRouter = createBrowserRouter()
This createBrowserRouter() takes a list of paths which are objects and it will contain two things, for example if we are calling about what should happen if we call that URL if we call that route so that we are going to pass it here in createBrowserRouter()
const appRouter = createBrowserRouter([
  {
    path: "/",
  },
  {
    path: "/about",
  }
])
But just creating the configuration won't work, we have to provide this configuration to render it on the page. For that we have to import one more Component from which we can import from react-router-dom which is known as RouterProvider. This will provide our routing configuration to our app. For that instead of rendering AppLayout on main root we have to render this component i.e:
root.render(<RouterProvider router = {appRouter} />)

So this is how we can create different routes in react.

We have a shortcut to make a quick Compoenent boiler plate which is "rafce".

To handle the errors react-roter-dom gives us a hook which is useRouterError which we have to import and it gives us an object with extra information which we can show to the user.

//Whenever we see a function starting from "use" it means its a hook, it a common convention to start a hook with word use.

CHILDREN ROUTES:
If we have to keep our Header intact and we just want to change the page below our Header suppose if we are on About page so about page should load below the Header and Header should always be there. So to create this functionality we have to create children routes. Here we have to give a children list to our main configuration means root route ("/").

{
    path:"/",
    element:<AppLayout/>,
    children:[
{
  path: "/about",
  element: <About/>
  },
  {
    path: "/contact",
    element: <Contact/>
  }
    ]
  },

Above we have created childrens on root route now /about and /contact are childrens of AppLayout. Now we have to render childrens in our AppLayout accordingly means we have to push children there according to the route, if our path is /about then about element will be gone up after Header component in AppLayout and respectively. Here AppLayout has three childrens and we want to load these childrens according to the path, for doing this react-router-dom has given us a Component which is Outlet which we have to import and we use it where we want to load the childrens according to the path.
  

