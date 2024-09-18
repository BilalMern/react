import RestaurantCard from "./RestaurantCard";
import resCardData from "../utils/mockData";
import { useEffect, useState } from "react";


let Body = () => {
  const[listOfRestaurant,setListOfRestaurant]=useState(resCardData);
  const[searchText,setsearchText]=useState("")
  console.log("body rendered")
  useEffect(()=>{
    console.log("useEffect called!")
  },[])
    return (
      <div className="body">
        <div className="filter">
          <div className="search filter-btn">
            <input type="text" className="search-box" value={searchText} onChange={(e)=>{
setsearchText(e.target.value)
            }}/>
            <button onClick={()=>{
              //filter the restaurant card and update the UI.
console.log(searchText)
            }}>Search</button>
          </div>
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






