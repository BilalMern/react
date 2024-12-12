import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  return (
    <>
      <div className="header">
        <div className="logo-container">
          <img className="logo" height={80} width={120} src={LOGO_URL} alt="" />
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li> <a href="/about">About Us (anchor tag) </a> </li>
            <li> <Link to="/contact" className="contact"> Contact Us (Link Component) </Link> </li>
            <li>Cart</li>
            <button
              className="login"
              onClick={() => {
                btnNameReact === "Login"
                  ? setBtnNameReact("Logout")
                  : setBtnNameReact("Login");
              }}
            >
              {btnNameReact}
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Header;
