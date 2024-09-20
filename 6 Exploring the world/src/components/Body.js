// import RestaurantCard from "./RestaurantCard";
// import resCardData from "../utils/mockData";
// import { useEffect, useState } from "react";

// let Body = () => {
//   const[listOfRestaurant,setListOfRestaurant]=useState(resCardData);
//   const[searchText,setsearchText]=useState("")
//   console.log("body rendered")
//   useEffect(()=>{
//     console.log("useEffect called!")
//   },[])
//     return (
//       <div className="body">
//         <div className="filter">
//           <div className="search filter-btn">
//             <input type="text" className="search-box" value={searchText} onChange={(e)=>{
// setsearchText(e.target.value)
//             }}/>
//             {/* with every key press in input what happens is we are changing the local state variable and what happens when we change this local state variable React re-renders the component it means whenever this state variale is getting updated on every key pressed, our whole Body component is getting re-rendered for exapmple if we write cafe in input on every letter C A F E our whole Body component will re-render but it is only updating the input box value inside the DOM.  */}
//             <button onClick={()=>{
//               //filter the restaurant card and update the UI.
// let filteredRes= listOfRestaurant.filter((res)=>res.cuisine.includes (searchText))
// setListOfRestaurant(filteredRes)
//             }}>Search</button>
//           </div>
//           <button className="filter-btn" onClick={()=>{
//             //! Filter logic is here!
//             let filteredList=listOfRestaurant.filter((res)=>res.rating> 4.6)

//           setListOfRestaurant(filteredList)
//           }}>Top Rated Restaurants</button>
//         </div>
//         {/* The below div contain so many restaurant carts. */}
//         <div className="res-container">
//           {listOfRestaurant.map((x) => {
//            return <RestaurantCard resData={x} />
//   })}
//         </div>
//       </div>
//     );
//   };
//  export default Body;

import RestaurantCard from "./RestaurantCard";
import resCardData from "../utils/mockData";
import { useEffect, useState } from "react";

let Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resCardData);
  const [searchText, setsearchText] = useState("");
  console.log("body rendered");
  useEffect(() => {
    console.log("useEffect called!");
  }, []);
  return (
    <div className="body">
      <div className="filter">
        <div className="search filter-btn">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              let filteredRes = listOfRestaurant.filter((res) =>
                res.cuisine.toLowerCase().includes(searchText.toLowerCase())
              );

              setListOfRestaurant(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            //! Filter logic is here!
            let filteredList = listOfRestaurant.filter(
              (res) => res.rating > 4.6
            );

            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      {/* The below div contain so many restaurant carts. */}
      <div className="res-container">
        {listOfRestaurant.map((x) => {
          return <RestaurantCard resData={x} />;
        })}
      </div>
    </div>
  );
};
export default Body;
