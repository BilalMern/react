/**
 *Header
 *  -Logo
 *  -Nav Items
 *Body
 *  -Search
 *  -RestaurantContainer
 *    -RestaurantCard
 *Footer
 *  -Copyright
 *  -Links
 *  -Address
 *  -Contact
 */

import React from "react";
import ReactDOM from "react-dom/client";

let Header = ()=>{
    return (
        <div className="header">
            <div className="logo"><img src = "https://www.creativefabrica.com/wp-content/uploads/2021/03/16/restaurant-logo-design-template-Graphics-9643920-1.jpg"/></div>
            <div></div>
        </div>
    )
}

let AppLayout = () => {
  return <div className="app">

   <Header/>
   

  </div>;
};
let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)