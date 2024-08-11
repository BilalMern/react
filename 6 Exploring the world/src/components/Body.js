import RestaurantCard from "./RestaurantCard";
import resCardData from "../utils/mockData";
import { useState } from "react";


let Body = () => {
  const[listOfRestaurant,setListOfRestaurant]=useState(resCardData)
    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={()=>{
            //! Filter logic is here!
            let filteredList=listOfRestaurant.filter((res)=>res.rating> 4.6)
            
          setListOfRestaurant(filteredList)
          }}>Top Rated Restaurants</button>
        </div>
        {/* The below div contain so many restaurant carts. */}
        <div className="res-container">
          {listOfRestaurant.map((x) => {
           return <RestaurantCard resData={x} />
  })}
        </div>
      </div>
    );
  };
 export default Body; 



