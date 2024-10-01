import LOGO_URL from "../utils/constant"
let Header = () => {
    return (
      <div className="header">
        <div className="logo">
          <img src= {LOGO_URL} />
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
export default Header;  