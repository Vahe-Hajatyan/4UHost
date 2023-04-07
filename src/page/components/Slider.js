import { Link } from "react-router-dom";
import dream_img from "../../images/dream_img.png";
import CarouselCompound from "../carousel";

const Slider = () => {
  return (
    <div className="full_bg">
      <div className="slider_main">
        <div className="app__main-container">
          <CarouselCompound infinite>
            <CarouselCompound.Page>
              <div className="item container">
                <div className="relative">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="dream">
                        <h1>
                          PowerFull
                          <br />
                          HOSTING
                          <br />
                          Your dream
                          <br />
                          website
                        </h1>
                        <Link className="read_more" to={"/hosting"}>
                          Get Stared
                        </Link>
                        <Link className="read_more" to={"/contact"}>
                          Contact Us
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="dream_img">
                        <figure>
                          <img src={dream_img} alt="#" />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselCompound.Page>
            <CarouselCompound.Page>
              <div className="item container">
                <div className="relative">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="dream">
                        <h1>
                          PowerFull
                          <br />
                          HOSTING <br />
                          Your dream
                          <br />
                          website
                        </h1>
                        <Link className="read_more" to={"/hosting"}>
                          Get Stared
                        </Link>
                        <Link className="read_more" to={"/contact"}>
                          Contact Us
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="dream_img">
                        <figure>
                          <img src={dream_img} alt="#" />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselCompound.Page>
            <CarouselCompound.Page>
              <div className="item container">
                <div className="relative">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="dream">
                        <h1>
                          PowerFull
                          <br />
                          HOSTING <br />
                          Your dream
                          <br />
                          website
                        </h1>
                        <Link className="read_more" to={"/hosting"}>
                          Get Stared
                        </Link>
                        <Link className="read_more" to={"/contact"}>
                          Contact Us
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="dream_img">
                        <figure>
                          <img src={dream_img} alt="#" />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselCompound.Page>
          </CarouselCompound>
        </div>
      </div>
    </div>
  );
};
export default Slider;
