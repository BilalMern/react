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



// import RestaurantCard from "./RestaurantCard"
// import resCardData from "../utils/mockData";

// let data=[{
//   img: (src =
//     "https://images.pexels.com/photos/7394819/pexels-photo-7394819.jpeg?auto=compress&cs=tinysrgb&w=800"),
//   cuisine: "Matka Biryani, Pakistani, Asian",
//   rating: "4.8",
//   delivery: "90 MINS",
//   price: "PKR 1500 PER MATKA",
// },
// {
//   img: (src =
//     "https://images.pexels.com/photos/7394819/pexels-photo-7394819.jpeg?auto=compress&cs=tinysrgb&w=800"),
//   cuisine: "Matka Biryani, Pakistani, Asian",
//   rating: "3",
//   delivery: "90 MINS",
//   price: "PKR 1500 PER MATKA",
// },
// {
//       img: (src =
//         "https://images.pexels.com/photos/7394819/pexels-photo-7394819.jpeg?auto=compress&cs=tinysrgb&w=800"),
//       cuisine: "Matka Biryani, Pakistani, Asian",
//       rating: "4.8",
//       delivery: "90 MINS",
//       price: "PKR 1500 PER MATKA",
//     },
//     {
//       img: (src =
//         "https://images.pexels.com/photos/7394819/pexels-photo-7394819.jpeg?auto=compress&cs=tinysrgb&w=800"),
//       cuisine: "Matka Biryani, Pakistani, Asian",
//       rating: "4.9",
//       delivery: "90 MINS",
//       price: "PKR 1500 PER MATKA",
//     },
// ]

// let Body = () => {
//     return (
//       <div className="body">
//         <div className="filter">
//           <button className="filter-btn" onClick={()=>{
//             //! Filter logic is here!
//             data=data.filter((x)=>x.rating > 4)
//             console.log(data)
//           }}>Top Rated Restaurants</button>
//         </div>
//         {/* The below div contain so many restaurant carts. */}
//         <div className="res-container">
//           {data.map((x) => {
//            return <RestaurantCard resData={x} />
//   })}
//         </div>
//       </div>
//     );
//   };
//  export default Body; 