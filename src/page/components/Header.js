import { useState } from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="header">
      <div className="container">
        <div className="row d_flex">
          <div className="col-md-2 col-sm-3 col logo_section">
            <div className="full">
              <div className="center-desk">
                <div className="logo">
                  <Link to={"/"}>
                    <img src={logo} alt="logo img" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-10 col-sm-12">
            <nav className="navigation navbar navbar-expand-md navbar-dark">
              <button
                className="navbar-toggler"
                onClick={() => setToggle(!toggle)}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className={`collapse navbar-collapse ${
                  toggle ? "collapse show" : ""
                }`}
              >
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <Link to={"/"} className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/about"} className="nav-link">
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/hosting"} className="nav-link">
                      Hosting
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/domain"} className="nav-link">
                      Domain
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/contact"} className="nav-link">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
