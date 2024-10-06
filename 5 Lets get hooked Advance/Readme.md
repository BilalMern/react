App-Layout
  Header
    -Logo
    -Nav Items
  Body
    -Search
    -RestaurantContainer
      -RestaurantCard
        -Name of Restaurant
        -Image
        -Name of the Restaurant, Star Rating, Cuisines, Delivery Time
  Footer
    -Copyright
    -Links
    -Address
    -Contact


Every thing that react can do we can do that using normal html css javascript. Why do we then use react ? The beauty of using Framework or Library is that it makes developer experience easy it makes us write less code and do more on the web page. This is the major job of UI framework or library is. So react gives us superpowers so that we can build these large scalable production ready performant application. React makes our coding experience very fast and also optimize somethings on web page so that things happens very fast. We will now start to see the real superpowers of React now.

Previously we wrote everything in a single app.js file which is not good practice. A best practice in the industry is to make separate files for separate components. And after making separate file for each folder we have to first export it in the file and then import it in our main app where we want to use that component.

All the main code in the react project we generally keep it in a src folder.

In component files we should not add any hardcoded data and hardcoded string like image src. We have to maka another file in the utils folder named as constants.js.

There are two types of import and export, default and named. In one file we can only use one default export. If we have to export multiple things from one file then we use named export. For using named export we just have to write export in front of our variable name. and while importing it we write variable name inside {}.

for example:
 -Default Import Export:
   export default component(or variable name);
   import component from "path";
  
 -Named Import Export:
   export const component;
   import {component} from "path";

In path ./ means accessing file from same folder and when import something from same file ./ is necessary to write because if we dont write it then it is considered as a node module part. So by writing ./ we insure that it is local file not in node-modules.

Suppose if we have to keep our data and the UI layer consistent or parelled to each other that is where react comes into the picture.

In react Event listener onClick takes a call back function for example:
button onClick = {()=>{...}}


REACT HOOKS: also known as utility functions. Which maintains the state of the component. and its scope is inside that component.
To create react super power variables we use hooks. the hooks in the end of the day is simple js functions which is given to us by react its a prebuilt, the only thing is that function comes with super powers.
                 There are two very important hooks:
-useState()  
          Used to give us superpowerfull state   Variable in react. To use it we have first to import it from react and we always import it as a named import. As we know react hooks are js functions so we have to call it as same as js function when we call it it will give us a state variable and we recieve that variable in array for example:
let [listOfCards] =useState(); // This is how we create a state variable, as we know hooks are just a normal javaScript functions so by calling it hook will give us a state variable which we have to collect in array i.e,
let [listOfCards] =useState();

Difference between normal and state variable:
  Normal variable:
    let listOfCard;
  State variable:
    const [listOfCard]=useState() //To give default value to variable we have to write it in function arguement i.e:  cont [listOfCard]=useState([{},{},{},{}]);
  
  and if we have to update the value of state variable then we have to give second parameter to it which is itself a function and by calling it we can give the value to update.

  const [listOfCard,setlistOfCard]=useState([{},{}])
            |              |                   |
      
      State Variable  
                      Function to 
                      Call

                              Default value of state variable to whatever we need to update in state variable(Responsible for updation of stateVariable)                 
                                                            
                                      
                     
                      
                     

Whenever the State Variable updates React reRender the component. React does it very fast, in a very optimized way in less code. This is the beauty of React. Because of this React is the most popular library for building UI applications. Here what React is doing is making DOM Operations super fast and efficient. So if we click TOP RATED RESTAURANT button browser has to Rerender that component. That logic of updating this UI is known as Rerendering and this is where React is best. A lot of developers thinks that our web application is fast because we are using React, React is minifyinf our code, React is Bundling our code.. No friends React does not do anything React is only good at DOM operations This is the core logic of React. Hooks sinks our UI Layer with Data Layer. When data changes our UI updates automatically.



//React says I will controll UI not you means what to update or when to update in UI I(React) will decide it. So react reacts on updation of variables. So to update data React gives us special method which is known as HOOKS. by using hooks we can sink data layer and UI layer together.

-useEffect()

REACT FIBRE: (RECONCILIATION ALGORITHM)
finds the difference between two virtual doms old and new or updated and previous and then update a actual dom.
virtual dom is a representation of actual dom.

Actual Dom:
Actual Dom is tags i.e <div> <img>.. this is actual dom

Virtual Dom:
Virtial Dom is representation of actual dom. just like react.createElement gives us an object that object is virtual dom and if we have big structure then react will also give us object. Means if we console.log any component then it will give object. So we can say that it is normal js object. So whatever we see in the UI React keeps the track of all the UI, all the HTML elements as a virtual dom which is kind of object representation of the dom.
for example if we have seven card in the UI and when we click filter button our UI filtered out and give us three card only so here before click the filter btn react keeps our HTMl in an object and after clicking that filter btn new object will formed and now react finds out the difference between these two objects that first it has sevens cards now there are three cards. after finding difference it will actually update the DOM. So we can say that whenever there is a change in any state variable, React will find out the difference between the virtual Dom and it will rerender our component. So we can say that React is fast because it is doing efficient Dom manipulation.

If the Interviewer ask you why react is fast because it has virtual Dom, it has a Diff Algorithm, which is very efficient, it can do efficient Dom manipulation.
The concept of virtual dom existed from a long time in software engineering. React took that and built its own algorithm over that virtual Dom which is known as Diff algorithm.

in a state variable the function which we have to call work as a trigger to start the React Diff Algorithm and update the UI. So when we call that function it will automatically rerender our component.

const [listOfRestaurant,setListOfRestaurant] = useState() is same as:
const arr= useState();
const listOfRestaurant = arr[0];
const setListOfRestaurant =arr[1];
both methods do same work in first we are destructuring on the fly.

//Never ever keeps any hard coded string in Component file. We should keep them in constant.js file in the folder name as utils or common or config. And its a good practice to name a constants in a CAPITAL letters.

//In one file we can only have one default export, we cannot use export default twice in one file. If we have to export multiple things from single file then we use named export.