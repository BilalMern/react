import React from "react";
import ReactDOM from "react-dom/client";

let Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://png.pngtree.com/png-clipart/20200720/original/pngtree-abstract-logo-for-cafe-or-restaurant-graphic-food-icon-symbol-for-png-image_4316818.jpg" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>
            About <span className="red">Us</span>
          </li>
          <li>
            Contact<span className="red"> Us</span>
          </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>

    
  );
};

let resCardData = [
  {
    img: (src =
      "https://images.pexels.com/photos/16637682/pexels-photo-16637682/free-photo-of-burger-and-fries-on-table-in-restaurant.jpeg?auto=compress&cs=tinysrgb&w=800"),
    cuisine: "Zinger, Pakistan, Asian",
    rating: "4.2",
    delivery: "30 MINS",
    price: "PKR 1000 FOR TWO",
  },
  {
    img: (src =
      "https://images.pexels.com/photos/7394819/pexels-photo-7394819.jpeg?auto=compress&cs=tinysrgb&w=800"),
    cuisine: "Matka Biryani, Pakistani, Asian",
    rating: "4.8",
    delivery: "90 MINS",
    price: "PKR 1500 PER MATKA",
  },
  {
    img: (src =
      "https://images.pexels.com/photos/1082343/pexels-photo-1082343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"),
    cuisine: "Pizza, Asian",
    rating: "4.5",
    delivery: "60 MINS",
    price: "PKR 3000 FOR TWO",
  },
  {
    img: (src =
      "https://images.pexels.com/photos/4224305/pexels-photo-4224305.jpeg?auto=compress&cs=tinysrgb&w=800"),
    cuisine: "Spicy Green Chutny Rice, Pakistani",
    rating: "4.0",
    delivery: "45 MINS",
    price: "PKR 1000 PER PLATE",
  },
  {
    img: (src =
      "https://images.pexels.com/photos/7353380/pexels-photo-7353380.jpeg?auto=compress&cs=tinysrgb&w=800"),
    cuisine: "Chicken Karahi, Pakistani",
    rating: "4.9",
    delivery: "60 MINS",
    price: "PKR 3500 PER KG",
  },
  {
    img: (src =
      "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"),
    cuisine: "Salmon, SeaFood",
    rating: "4.7",
    delivery: "45 MINS",
    price: "PKR 2500 PER PLATE",
  },
  {
    img: (src =
      "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=800"),
    cuisine: "Grilled Fish, SeaFood",
    rating: "4.5",
    delivery: "45 MINS",
    price: "PKR 2000 PER PLATE",
  },
  {
    img: (src =
      "https://images.pexels.com/photos/8697543/pexels-photo-8697543.jpeg?auto=compress&cs=tinysrgb&w=800"),
    cuisine: "Spicy Prawns, SeaFood",
    rating: "4.7",
    delivery: "60 MINS",
    price: "PKR 4000 PER PLATE",
  },
  {
    img: (src =
      "https://media.istockphoto.com/id/610264540/photo/cajun-shrimp.jpg?b=1&s=612x612&w=0&k=20&c=PhvFm1E8UIy0NTg7iXLlZJzIct0LMwOzs5R_fVxnBNs="),
    cuisine: "Grilled Prawns, SeaFood",
    rating: "4.8",
    delivery: "60 MINS",
    price: "PKR 4000 PER PLATE",
  },
  {
    img: (src =
      "https://media.istockphoto.com/id/1214416414/photo/barbecued-salmon-fried-potatoes-and-vegetables-on-wooden-background.jpg?b=1&s=612x612&w=0&k=20&c=C6LrStXcfzq2iKmCeCFsYXeKa-JBGEz0s8ZcpD1XKkk="),
    cuisine: "Tuna, SeaFood",
    rating: "5.0",
    delivery: "75 MINS",
    price: "PKR 10000 PER PLATE",
  },
  {
    img: (src =
      "https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=800"),
    cuisine: "Grilled Steak",
    rating: "4.3",
    delivery: "70 MINS",
    price: "PKR 3000 PER PLATE",
  },
  {
    img: (src =
      "https://images.pexels.com/photos/262945/pexels-photo-262945.jpeg?auto=compress&cs=tinysrgb&w=800"),
    cuisine: "Grilled Chicken",
    rating: "4.0",
    delivery: "60 MINS",
    price: "PKR 2500 PER PLATE",
  },
  {
    img: (src =
      "https://media.istockphoto.com/id/519590957/photo/tikka-bots-10.jpg?b=1&s=612x612&w=0&k=20&c=OyTxmaWJQAUzmyBehCNU8Qcgjb1Wapb_23w5y5HlQW0="),
    cuisine: "Barbeque",
    rating: "4.0",
    delivery: "60 MINS",
    price: "PKR 2500 PER PLATE",
  },
  {
    img: (src =
      "https://media.istockphoto.com/id/1483146384/photo/assorted-mix-grills-with-chicken-tikka-beef-kabab-mutton-kebab-wings-boti-malai-shish-tawook.jpg?b=1&s=612x612&w=0&k=20&c=AqpmOqpkbG5HyoVhM2v57hkiv3hRIQ8iu26igrNb4m0="),
    cuisine: "Kabab Platter",
    rating: "4.4",
    delivery: "60 MINS",
    price: "PKR 3500 PER PLATE",
  },
  {
    img: (src =
      "https://media.istockphoto.com/id/1454433031/photo/chicken-malai-tikka-boti-served-in-plate-isolated-on-table-top-view-of-indian-and-pakistani.jpg?b=1&s=612x612&w=0&k=20&c=V5kXIW_EFMq5YHYlCTZ6Jz8SEK83T9h8GbQrZXSY6ck="),
    cuisine: "Malai Boti",
    rating: "4.2",
    delivery: "40 MINS",
    price: "PKR 1500 PER PLATE",
  },
  {
    img: (src =
      "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"),
    cuisine: "Strawberry Pancake",
    rating: "4.5",
    delivery: "30 MINS",
    price: "PKR 1500",
  },
  {
    img: (src =
      "https://images.pexels.com/photos/2156698/pexels-photo-2156698.jpeg?auto=compress&cs=tinysrgb&w=800"),
    cuisine: "Premium Pista",
    rating: "4.6",
    delivery: "10 MINS",
    price: "PKR 1000",
  },
  {
    img: (src =
      "https://images.pexels.com/photos/3702403/pexels-photo-3702403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"),
    cuisine: "Creamy Pancake",
    rating: "4.9",
    delivery: "30 MINS",
    price: "PKR 2000",
  },
  {
    img: (src =
      "https://images.pexels.com/photos/15901860/pexels-photo-15901860/free-photo-of-hand-holding-cookie-above-tray.jpeg?auto=compress&cs=tinysrgb&w=800"),
    cuisine: "Fresh Backed Cookie",
    rating: "4.3",
    delivery: "30 MINS",
    price: "PKR 1000",
  },
  {
    img: (src =
      "https://images.pexels.com/photos/10571351/pexels-photo-10571351.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"),
    cuisine: "Chocko Lava Cake",
    rating: "4.6",
    delivery: "30 MINS",
    price: "PKR 3000",
  },
];

let RestaurantCard = (props) => {
  const {resData} =props
  // const { img,cuisine,price,delivery,rating } = props;
  //! Some developers instead of writing props here they destructure on the fly means: let RestaurantCard = ({img,cuisine,rating,delivery,price}) => { --> now below we dont need to write {props.img}, {props.cuisine},{props.price} etc we just need to write {img},{cuisine},{price}. This destructuring on the fly is same as const  RestaurantCard = (props) => { const {img,price,delivery,cuisine}=props___}
  return (
    <div className="res-card">
      <img className="card-img" src={resData.img} />
      <h3>
        <span className="lorems">Lorem</span> Ipsum
      </h3>
      <h6 className="cousine">{resData.cuisine}</h6>
      <div className="details">
        <h6 className="rating">
          <i class="bi bi-star-fill"></i> {resData.rating}
        </h6>
        <h6 className="delivery">{resData.delivery}</h6>
        <h6 className="price">{resData.price}</h6>
      </div>
    </div>
  );
};

let Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      {/* The below div contain so many restaurant carts. */}
      <div className="res-container">
        {resCardData.map((x) => {
         return <RestaurantCard resData={x} />
})}
      </div>
    </div>
  );
};

let AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
