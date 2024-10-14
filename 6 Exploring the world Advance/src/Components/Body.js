
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    
    // Optional chaining.
    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-center">
        <div className="search">
        
          <input
            type="text"
            className="input-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value)
            }}
          />
          
          <button onClick={()=>{
          const filteredRes = listOfRestaurant.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
      setFilteredRestaurant(filteredRes)
         }}>Search</button>
        </div>

        <div className="top_rated">
          <button
            className="filter_btn"
            onClick={() => {
              const filteredList = listOfRestaurant.filter(
                (fil) => fil.info.avgRating > 4.4
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="res-container">
        {filteredRestaurant.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};
export default Body;
