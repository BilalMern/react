/**
*App-Layout
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
            <div className="logo"><img src = "https://png.pngtree.com/png-clipart/20200720/original/pngtree-abstract-logo-for-cafe-or-restaurant-graphic-food-icon-symbol-for-png-image_4316818.jpg"/></div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About <span className="red">Us</span></li>
                    <li>Contact<span className="red"> Us</span></li>
                    <li>Cart</li>
                </ul>
            </div>
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


