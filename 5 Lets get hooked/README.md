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

In component files we should not add any hardcoded data and hardcoded string like image src.

There are two types of import and export, default and named. In one file we can only use one default export. If we have to export multiple things from one file then we use named export. For using named export we just have to write export in front of our variable name.