/**
 *App-Layout
 *Header
 *  -Logo
 *  -Nav Items
 *Body
 *  -Search
 *  -RestaurantContainer
 *    -RestaurantCard
 *      -Name of Restaurant
 *      -Image
 *      -Name of the Restaurant, Star Rating, Cuisines, Delivery Time
 *Footer
 *  -Copyright
 *  -Links
 *  -Address
 *  -Contact
 */

import React from "react";
import ReactDOM from "react-dom/client";

let Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://png.pngtree.com/png-clipart/20200720/original/pngtree-abstract-logo-for-cafe-or-restaurant-graphic-food-icon-symbol-for-png-image_4316818.jpg" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>
            About <span className="red">Us</span>
          </li>
          <li>
            Contact<span className="red"> Us</span>
          </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

let RestaurantCard = () => {
  return (
    <div className="res-card">
      <img
        className="card-img"
        src="https://images.pexels.com/photos/16637682/pexels-photo-16637682/free-photo-of-burger-and-fries-on-table-in-restaurant.jpeg?auto=compress&cs=tinysrgb&w=800"
      />
      <h3>
        <span className="lorems">Lorem</span> Ipsum
      </h3>
      <h6 className="cousine">Zinger, pakistan, Asian</h6>
      <div className="details">
        <h6 className="rating"><i class="bi bi-star-fill"></i> 4.4</h6>
        <h6 className="delivery">38 MINS</h6>
        <h6 className="price">PKR 1000 FOR TWO</h6>
      </div>
    </div>
  );
};

let Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      {/* The below div contain so many restaurant carts. */}
      <div className="res-container">
        <RestaurantCard />
      </div>
    </div>
  );
};

let AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

//! if we have to write css in jsx then we have to write it in object, i.e:
// let styleCard={
//    color: red,
// }
// const Card =()=>{
//     return (
//         <div style={styleCard}>hello there!</div> OR
//         <div style ={{color:red}}>
//     )
// } //!this will make text color red.
