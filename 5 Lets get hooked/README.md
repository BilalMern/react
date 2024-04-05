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


REACT HOOKS: also known as utility functions.
To create react super power variables we use hooks. the hooks in the end of the day is simple js functions which is given to us by react its a prebuilt, the only thing is that function comes with super powers.
                 There are two very important hooks:
-useState()  
          Used to give us superpowerfull state   Variable in react. To use it we have first to import it from react and we always import it as a named import. As we know react hooks are js functions so we have to call it as same as js function when we call it it will give us a state variable and we recieve that variable in array for example:
let [listOfCards] =useState(); // This is how we create a state variable 

Difference between normal and state variable:
  Normal variable:
    let listOfCard;
  State variable:
    const [listOfCard]=useState() //To give default value to variable we have to write it in function arguement i.e:  cont [listOfCard]=useState([{},{},{},{}]);
  
  and if we have to update the value of state variable then we have to give second parameter to it which is itself a function and by calling it we can give the value to update.

  const [listOfCard,setlistOfCard]=useState([{},{}])
            |              |                   |
      State Variable  Function to call      default 
                      to whatever            value of
                      we need to update      state variable
                      in state variable
                      (Responsible for
                      updation of stare
                      variable)    

Whenever the State Variable updates React reRender the component.

//React says I will controll UI not you means what to update or when to update in UI I(React) will decide it. So react reacts on updation of variables. So to update data React gives us special method which is known as HOOKS.

-useEffect()