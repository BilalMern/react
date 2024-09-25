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

