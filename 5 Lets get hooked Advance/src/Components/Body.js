
import resList from "./utils/mockData";
import RestaurantCard from './RestaurantCard';

const Body = () => {
    return (
      <div className="body">
        <div className="search-center">
        <div className="top_rated">
          <button className="filter_btn" onClick = {()=>{
         const filteredList = resList.filter((fil)=>fil.info.avgRating > 4.5)
        console.log(filteredList)
          }}>Top Rated Restaurants</button>
        </div>
        </div>
       
        <div className="res-container">
          {
            resList.map((restaurant)=>{
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