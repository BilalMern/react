if we have to write css in jsx then we have to write it in object, i.e:
 let styleCard={
    color: red,
 } 
  const Card =()=>{
     return (
         <div style={styleCard}>hello there!</div> OR
        <div style ={{color:red}}>
    ) 
  } this will make text color red. 



Making our cards dynamic by using props:
*  Props are just normal function arguments: passing a prop to a component means passing a argument to a function.
* React will wrap all the props as an object and passing over props parameter.
* To pass some dynamic data to component we can pass it as a props. 
Very core Concept use in Industry 
* This concept is known as CONFIG DRIVEN UI. Suppose restaurant have some offers in its different branches in different cities so the the only offers of persons respective cities are shown to them means these offers will be different for karachi and will be different for islamabad and like that. so it means our website is driven by data. So CONFIG DRIVEN UI controlling our UI how the UI looks using DATA using a config which is comes from BACKEND.
* In now a days websites are built using config driven UI by which data may be different in different cities. We have writen the UI once and now according to the data which is coming from backend our UI is getting changed. This is known as config driven UI.

if we have to write css in jsx then we have to write it in object, i.e:
 let styleCard={
    color: red,
 } 
const Card =()=>{
     return (
         <div style={styleCard}>hello there!</div> OR
        <div style ={{color:red}}>
    ) 
} this will make text color red. 



Making our cards dynamic by using props:
*  Props are just normal function arguments: passing a prop to a component means passing a argument to a function.
* React will wrap all the props as an object and passing over props parameter.
* To pass some dynamic data to component we can pass it as a props.  -->

Very core Concept use in Industry 
* This concept is known as CONFIG DRIVEN UI. Suppose restaurant have some offers in its different branches in different cities so the the only offers of persons respective cities are shown to them means these offers will be different for karachi and will be different for islamabad and like that. so it means our website is driven by data. So CONFIG DRIVEN UI controlling our UI how the UI looks using DATA using a config which is comes from BACKEND.
* In now a days websites are built using config driven UI by which data may be different in different cities. We have writen the UI once and now according to the data which is coming from backend our UI is getting changed. This is known as config driven UI.

Importance of Key:
When we loop on same level components or whe we have multiple components on same level then each component must have unique key. if there is no key present then React will not able to keep track of them for example if we add one more component in second place then React never know where to insert it and it will Render all the components, But by giving key(id) to them React will able to detect that where to insert new component and it will not render all the components just render the new one.

So in React whenever we use "map" we have to give each component unique key. We can use index as a key but React itself says that never use index as a key. So index as a key is an anti-pattern.