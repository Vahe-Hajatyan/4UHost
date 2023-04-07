import { Link } from "react-router-dom";

const Order = ({ style }) => {
  document.body.classList.add(style);
  return (
    <div className="order">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="titlepage text_align_center">
              <h2>
                Check Out Awesome Plans, <br />
                <span className="blue_light">Order Now</span>
              </h2>
              <p>
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div id="ho_co" className="order-box_main">
              <div className="order-box text_align_center">
                <h3>Shared Hosting</h3>
                <p>
                  STARTING <span>$9</span> PER MONTH
                </p>
                <a>Personal use</a>
                <ul className="supp">
                  <li>Unlimited projects</li>
                  <li>24/7 support</li>
                  <li>Personal use</li>
                  <li>Unlimited projects</li>
                  <li>24/7 support</li>
                </ul>
              </div>
              <Link className="read_more" to={"/hosting"}>
                Buy Now
              </Link>
            </div>
          </div>
          <div className="col-md-4">
            <div id="ho_co" className="order-box_main">
              <div className="order-box text_align_center">
                <h3>Reseller Hosting</h3>
                <p>
                  STARTING <span>$9</span> PER MONTH
                </p>
                <a>Personal use</a>
                <ul className="supp">
                  <li>Unlimited projects</li>
                  <li>24/7 support</li>
                  <li>Personal use</li>
                  <li>Unlimited projects</li>
                  <li>24/7 support</li>
                </ul>
              </div>
              <Link className="read_more" to={"/hosting"}>
                Buy Now
              </Link>
            </div>
          </div>
          <div className="col-md-4">
            <div id="ho_co" className="order-box_main">
              <div className="order-box text_align_center">
                <h3>Dedicated Servers</h3>
                <p>
                  STARTING <span>$9</span> PER MONTH
                </p>
                <a>Personal use</a>
                <ul className="supp">
                  <li>Unlimited projects</li>
                  <li>24/7 support</li>
                  <li>Personal use</li>
                  <li>Unlimited projects</li>
                  <li>24/7 support</li>
                </ul>
              </div>
              <Link className="read_more" to={"/hosting"}>
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Order;
