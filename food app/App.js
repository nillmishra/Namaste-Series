import React from "react";
import { createRoot } from "react-dom/client";

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img src="https://t4.ftcdn.net/jpg/03/10/96/77/360_F_310967735_vWiWRc8DGV3fb4eaW8O339AvbOsmxzVi.jpg" className="logo" alt="Logo" />
    </div>
    <div className="navbar">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

const ResturantCard = (props) => {
  const { resData } = props;
  const {name, cuisine, stars, delivery} = resData;

  return (
    <div className="card-container">
      <div>
        <img
          src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.cloudinaryid}
          alt={resData.name}
        />
      </div>
      <div className="description">
        <h3>{name}</h3>
        <h4>{cuisine}</h4>
        <h4>{stars}</h4>
        <h4>{delivery}</h4>
      </div>
    </div>
  );
};

const resObj = [
  {
    name: "Minar Food",
    cuisine: "Biryani, North Indian, Asian",
    stars: "4.4 Stars",
    delivery: "38min to Deliver",
    cloudinaryid: "2469fa88ee9b0b5d1366ba88f2a7fa7f",
  },
  {
    name: "Spice Villa",
    cuisine: "South Indian, Vegetarian",
    stars: "4.1 Stars",
    delivery: "30min to Deliver",
    cloudinaryid: "nigqvxgzvyxtfjuqasgg",
  },
  {
    name: "Tandoori Express",
    cuisine: "North Indian, Grill",
    stars: "4.6 Stars",
    delivery: "35min to Deliver",
    cloudinaryid: "0adf25c57357161b20c11281d8a443e6",
  },
  {
    name: "Curry House",
    cuisine: "Indian, Mughlai",
    stars: "4.2 Stars",
    delivery: "40min to Deliver",
    cloudinaryid: "ryzswg44bt7thqzkuaj4",
  },
  {
    name: "Masala Magic",
    cuisine: "Indian, Street Food",
    stars: "4.0 Stars",
    delivery: "33min to Deliver",
    cloudinaryid: "rvxp5xbniat84r6efku2",
  },
  {
    name: "Saffron Delight",
    cuisine: "Hyderabadi, Biryani",
    stars: "4.5 Stars",
    delivery: "37min to Deliver",
    cloudinaryid: "dh0qsuqritnmbncwrni3",
  },
  {
    name: "Chaat Corner",
    cuisine: "Indian Snacks, Street Food",
    stars: "4.3 Stars",
    delivery: "29min to Deliver",
    cloudinaryid: "906c0affa7d8ff78a3e4db88b4433cde",
  },
  {
    name: "Royal Rasoi",
    cuisine: "Punjabi, North Indian",
    stars: "4.7 Stars",
    delivery: "42min to Deliver",
    cloudinaryid: "qd4znnazesd7hseqld5s",
  },
];

const Body = () => (
  <div>
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search restaurants, cuisines..."
        aria-label="Search"
      />
    </div>
    <div className="res-container">
        {resObj.map((restaurant) => (
        <ResturantCard resData={restaurant} key={restaurant.name} />
      ))} 

    </div>
  </div>
);

const AppLayout = () => (
  <div className="App">
    <Header />
    <Body />
  </div>
);

const root = createRoot(document.getElementById("root"));
root.render(<AppLayout />);
