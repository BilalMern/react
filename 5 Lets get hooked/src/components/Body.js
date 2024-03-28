import RestaurantCard from "./RestaurantCard"
import resCardData from "../utils/mockData";



let Body = () => {
    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={()=>{console.log("button clicked!")}}>Top Rated Restaurants</button>
        </div>
        {/* The below div contain so many restaurant carts. */}
        <div className="res-container">
          {resCardData.map((x) => {
           return <RestaurantCard resData={x} />
  })}
        </div>
      </div>
    );
  };
 export default Body; 