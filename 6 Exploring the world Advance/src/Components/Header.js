import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
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
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
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
