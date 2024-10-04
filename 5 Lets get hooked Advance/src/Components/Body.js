
import resList from "./utils/mockData";
import RestaurantCard from './RestaurantCard';
const Body = () => {
    return (
      <div className="body">
        <div className="search-center">
          <div className="search">Search</div>
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