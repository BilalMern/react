MONOLITH ARCHITECTURE:
when the apps were developed traditionally they were all developed using a Monolith Architecture. What does it mean, so earlier we have a huge big project and suppose if we are building an application in this huge project we used to have small pieces we have developed API's inside this project we also have UI code inside the same project we have Authentication code inside it and also database. Now suppose if we have to change minor thing like color of a button what we used to do is we have to build this whole project we have to compile this whole project and we have to deploye this whole project so that is Monolith Architecture.

MICROSERVICE ARCHITECTURE:
Now a days the world is kind of moving towards Microservice Architecture all the big companies are preffering to make microservices. In this we have different services for all different jobs for example we have a service which is backend services we have a UI service, we have service which connects to Database, we have a service for our SMS sending these are known as Microservices and all these services combined together forms a big app means for every thing we have a different project and this is known as SEPARATION OF CONCERNS and SINGLE RESPONSIBILITY PRINCIPLE where each and every service has its own job.
So in Monolith Architecture all the developers the backend developers, frontend developers everybody used to work in the same project everybody used to work in same github repository now with Microservice Architecture all of the teams work on their own independent services.



How React application make a backend API call to fetch the data:

There are two approaches for how UI applications fetch the data from backend:

Number one is when our app loads one thing we can do is we can just make an API call and when we gat data we render it on the UI.

   LOAD ----> API ----> RENDER
As soon as our page loads we make an API call, wait for data to come and then we render the UI. Suppose this API call takes 500ms so what will happen the page will wait for 500ms and after 500ms it will render the UI.

The second approach is as soon as the page loads we will just render our UI. After we have quickly rendered our UI now we make an API call and as soon as we get the result back from that API, we will now populate we will now rerender our application with the new data.

  LOADS ----> RENDER ----> API ----> RERENDER

In react we will always be using second approach because this is better approach and gives us a better UX because in the first approach till 500ms our page is kind of frozen we dont see anything on the page and after 500ms we suddenly see everything so thats a poor UX. In the second 
approach we load the page and render what we can, render the skeleton so when we render the page quickly we can see something and then slowly the website loads its a better user experiece and the use did not see the lot of lag and all that kind of stuff. Now we must say that we are rendering twice it does'nt matter because the most important thing about React why React is so popular is because its render cycles are very fast. React has the one of the best render mechanism, React renders our UI very fast.

To code in second approach we have to use useEffect hook. Hooks are just a normal javaScript functions which react gives to us these has there own specific usecase where we use these functions. So just like useState is used to create state variable, useEffect is used to 
useEffect takes two arguments, first is callback function and the second is dependency array.
i.e:
              useEffect (()=>{},[])
