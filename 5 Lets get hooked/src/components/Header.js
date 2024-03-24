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
export default Header;  