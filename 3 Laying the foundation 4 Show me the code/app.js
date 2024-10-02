import React from "react";
import ReactDOM from "react-dom/client";

const Header = ()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" height={80} width={120} src="https://png.pngtree.com/png-clipart/20200720/original/pngtree-abstract-logo-for-cafe-or-restaurant-graphic-food-icon-symbol-for-png-image_4316818.jpg" alt="" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>

                </ul>
            </div>
        </div>
    )
}

const RestaurantCard =()=>{
    return(
            <div className="res-card">
                <img className="resCard-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/xqwpuhgnsaf18te7zvtv" alt="" />
                <h3>Meghana foods</h3>
                <h5>Biryani, North Indian, Asian</h5>
                <h5>4.4 stars</h5>
                <h5 className="delivery">38 minutes</h5>
            </div>
    )
}

const Body = ()=>{
    return(
        <div className="body">
            <div className="search-center">
          <div className="search">Search</div> 
          </div>
          <div className="res-container">
<RestaurantCard/>
          </div>
        </div>
    )
}
const AppLayout = ()=>{
    return(
        <div className="app">
<Header/>
<Body/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)