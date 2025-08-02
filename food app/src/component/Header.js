import { LOGO_URL } from "../utils/constant";

const Header = () => (
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
  </div>
);

export default Header;                              