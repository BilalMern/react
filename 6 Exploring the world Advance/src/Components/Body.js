
import RestaurantCard from './RestaurantCard';
import { useEffect, useState } from "react";

const Body = () => {
  const [listOfRestaurant,setListOfRestaurant]= useState([])
  useEffect(()=>{
   fetchData();
  }, []);

  const fetchData = async () => {
  const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  const json = await data.json();
  setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };

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





