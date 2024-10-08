import resList from "../utils/mockData";
import RestaurantCard from './RestaurantCard';
import { useState } from "react";

const Body = () => {
  const [listOfRestaurant,setListOfRestaurant]= useState(resList)
    return (
      <div className="body">
        <div className="search-center">
        <div className="top_rated">
          <button className="filter_btn" onClick = {()=>{
         const filteredList = resList.filter((fil)=>fil.info.avgRating > 4.5)
       setListOfRestaurant(filteredList)
          }}>Top Rated Restaurants</button>
        </div>
        </div>
       
        <div className="res-container">
          {
            listOfRestaurant.map((restaurant)=>{
              return (
                
                <RestaurantCard key={restaurant.info.id}  resData = {restaurant} />
              )
            })
          }
          
        </div>
      </div>
    );
  };
  export default Body;