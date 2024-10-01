import { useEffect } from "react";
const RestaurantMenu = ()=>{
    useEffect(()=>{
        fetchMenu();
        },[]);
        const fetchMenu = async ()=>{
            const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=5934&submitAction=ENTER")
            const json = await data.json()
            console.log(json)
        };
        
            return (
                <div>
                    <h1>Restaurant Name</h1>
                    <h3>Menu</h3>
                    <ul>
                        <li>Biryani</li>
                        <li>Burgers</li>
                        <li>Diet Coke</li>
                    </ul>
                </div>
            )
}


export default RestaurantMenu;