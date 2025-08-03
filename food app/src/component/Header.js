import { LOGO_URL } from "../utils/constant";
// import logo from "../assets/Logo.png";
import { useEffect, useState } from "react";
const Header = () => {
    const [btnName, setbtnName] = useState("Login");
    console.log("Header Render");

    //if no dependency array => useEffect is called on every render 
    //if dependecy array is empty = [] => use Effect is called on initial render (just once)
    // if dependency array is [btnName] => Every time btnName is updated.

    useEffect(()=>{
      console.log("useEffect Called");
    }, [btnName]);
    return(
  <div className="header">
    <div className="logo-container">
      <img src={LOGO_URL} className="logo" alt="Logo" />
    </div>
    <div className="navbar">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
    <button
      className="login"
      onClick={() => {
        btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
      }}
    >
      {btnName}
    </button>
  </div>
);
};

export default Header;                              