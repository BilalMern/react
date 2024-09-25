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
 
useEffect HooK:

To code in second approach we have to use useEffect hook. Hooks are just a normal javaScript functions which react gives to us these has there own specific usecase where we use these functions. So just like useState is used to create state variable, useEffect is used to render the things after comonent renders.
useEffect takes two arguments, first is callback function and the second is dependency array.
i.e:
              useEffect (()=>{},[])
here callback function will be called after component renders. for example if we are using useEffect hook in Body component so when the Body component will load it will render the component and as soon as the render cycle is finished it will call this callback function which we have passed into useEffect or in easy words when the Body component will render, it will render it and as soon as the render cycle is finished, it will just quickly call this callback function so this is how this useEffect hook will work. There are three cases for dependecy array:  

UseEffect will be called every time our Component renders. And if put a dependency array in it, then dependency array changes the behaviour of its render. Putting a dependency array is not mandatory only callback function is mandatory in useEffect. So when we call useEffect without a dependency array, it will render every time our component render.

Different cases of Dependency Array

--> if there is no dependency array that means useEffect will be called on every render. Means when we change or update something, useEffect will be called on each change and on each change React re-renders the component and on each render useEffect will be called.

--> if there is empty dependency array ( [] ), if the dependency array is empty then useEffect will be called on intitial render (just once) when the component is render for the first time. 

SHIMMER UI: 
We load fake page until we get the actual data from the API. This is a good practice for example if we use loading icon instead of shimmer UI, then while loading spinner is spinning, suddenly our page loads and things appear in front of us which is very painful for eyes as suddenly somethinf unimagined pops up in front of us and this is bad user experience. So by using shimmer UI user can anticipate that okay there will be cards which will be loading over here.


CONDITIONAL RENDERING:
Rendering on the basis of condition is known as conditional rendering.
ie:
if(listOfRestaurant.length ===0){
  return <Shimmer/>
}


useState Hook DETAILS:
By using simple variable, Ract dont know whether it is updated or not thats why useState hook gives us a special variable known as STATE VARIABLE by which react knows and keep track of updation. For example if we are using useState hook in our Header component so whenever this state variable will change React will Re-render this Header component React is kind of refresh this Header component and all the updated values will be there means it triggers the reconciliation process, means calculating the difference between old state of virtual dom and new state of virtual dom and then updating the UI. Here React is rendering the whole Header component, but React is only updating the things which are changed, the other things which are not changed will remain intact without even refresh. For example if we have logo, lists and a btn in our Header component and we only changed our button using state variable what happens is React will only refresh the button after re-rendering the whole Header component.
Whenever state variable update, react triggers a reconciliation cycle(re-render the component).

One important question arises from useState Hook is that how a constant variable be changed which is against the javascript rules? i.e

const [variablelist,setVariableList]=useState(simpleVariable)
setVariableList(newVariable)
The answer to this is whenever we update the value by using setVariableList() React is updating the variablelist and it is calling this Header component once again or rendering it once again but this time when we invoke that function, this variablelist is a new variable then it was before. This is the beauty of React. React has such amazing Reconciliation process such amazing Rendering process and it does the redering process or DOM manipulation very fast and efficiently.

