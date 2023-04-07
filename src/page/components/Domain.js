import { useState } from "react";
import { Link } from "react-router-dom";

const Domain = ({ style, button_domain }) => {
  const [isAll, setIsAll] = useState(false);
  document.body.classList.add(style);
  return (
    <div className="domain">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="titlepage text_align_center">
              <h2>
                all starts with <span className="blue_light">a domain</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <div className="form">
              <div className="searchbar">
                <input
                  className="search_input"
                  type="text"
                  name=""
                  placeholder="Search Domain"
                />
                <a href="#" className="search_icon">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-10 offset-md-1">
            <div className="domain_bg">
              <div className="col domain-block">
                <div className="domain-price">
                  <p>Domain Per Year</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="domain-price_main">
                    <div className="domain-price">
                      <span>.com</span>
                      <strong>22$</strong>
                    </div>
                    <div className="domain-price">
                      <span>.net</span>
                      <strong>21$</strong>
                    </div>
                    <div className="domain-price">
                      <span>.org</span>
                      <strong>15$</strong>
                    </div>
                    <div className="domain-price">
                      <span>.io</span>
                      <strong>13$</strong>
                    </div>
                    <div className="domain-price">
                      <span>.tv</span>
                      <strong>17$</strong>
                    </div>
                    <div className="domain-price">
                      <span>.ru</span>
                      <strong>15$</strong>
                    </div>
                  </div>
                  {isAll && (
                    <>
                      <div className="domain-price_main">
                        <div className="domain-price">
                          <span>.uk</span>
                          <strong>21$</strong>
                        </div>
                        <div className="domain-price">
                          <span>.ca</span>
                          <strong>15$</strong>
                        </div>
                        <div className="domain-price">
                          <span>.dev</span>
                          <strong>14$</strong>
                        </div>
                        <div className="domain-price">
                          <span>.me</span>
                          <strong>18$</strong>
                        </div>
                        <div className="domain-price">
                          <span>.ml</span>
                          <strong>17$</strong>
                        </div>
                        <div className="domain-price">
                          <span>.fa</span>
                          <strong>12$</strong>
                        </div>
                      </div>
                      <div className="domain-price_main">
                        <div className="domain-price">
                          <span>.am</span>
                          <strong>20$</strong>
                        </div>
                        <div className="domain-price">
                          <span>.app</span>
                          <strong>15$</strong>
                        </div>
                        <div className="domain-price">
                          <span>.in</span>
                          <strong>14$</strong>
                        </div>
                        <div className="domain-price">
                          <span>.id</span>
                          <strong>13$</strong>
                        </div>
                        <div className="domain-price">
                          <span>.co</span>
                          <strong>12$</strong>
                        </div>
                        <div className="domain-price">
                          <span>.ai</span>
                          <strong>13$</strong>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                {!button_domain &&
                  (!isAll ? (
                    <a className="read_more" onClick={() => setIsAll(true)}>
                      all
                    </a>
                  ) : (
                    <a className="read_more" onClick={() => setIsAll(false)}>
                      close
                    </a>
                  ))}
              </div>
            </div>
          </div>
        </div>
        {button_domain && (
          <div className="button-domain">
            <Link className="read_more" to={"/domain"}>
              See More
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
export default Domain;
