import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="infoma text_align_left">
                <h3>Choose.</h3>
                <ul className="commodo">
                  <li>Commodo</li>
                  <li>consequat. Duis a</li>
                  <li>ute irure dolor</li>
                  <li>in reprehenderit</li>
                  <li>in voluptate</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="infoma">
                <h3>Get Support.</h3>
                <ul className="conta">
                  <li>
                    <i className="fa fa-map-marker"></i>
                    Address : Loram Ipusm
                  </li>
                  <li>
                    <i className="fa fa-phone"></i>Call : +01 1234567890
                  </li>
                  <li>
                    <i className="fa fa-envelope"></i>
                    <a> Email : demo@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="infoma">
                <h3>Company.</h3>
                <ul className="menu_footer">
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>
                    <Link to={"/about"}>About Us</Link>
                  </li>
                  <li>
                    <Link to={"/domain"}>Domain</Link>
                  </li>
                  <li>
                    <Link to={"/hosting"}>Hosting</Link>
                  </li>
                  <li>
                    <Link to={"/Contact"}>Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="infoma text_align_left">
                <h3>Services.</h3>
                <ul className="commodo">
                  <li>Commodo</li>
                  <li>consequat. Duis a</li>
                  <li>ute irure dolor</li>
                  <li>in reprehenderit</li>
                  <li>in voluptate</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p> &copy;2023 All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
