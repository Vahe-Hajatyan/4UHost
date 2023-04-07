const Contact = ({ style }) => {
  document.body.classList.add(style);
  return (
    <div className="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="titlepage text_align_center">
              <h2>
                Contact <span className="blue_light">Us</span>
              </h2>
            </div>
          </div>
          <div className="col-md-10 offset-md-1">
            <form className="main_form">
              <div className="row">
                <div className="col-md-12">
                  <input
                    className="contactus"
                    placeholder="Name"
                    type="type"
                    name=" Name"
                  />
                </div>
                <div className="col-md-12">
                  <input
                    className="contactus"
                    placeholder="Phone number"
                    type="type"
                    name="Phone Number"
                  />
                </div>
                <div className="col-md-12">
                  <input
                    className="contactus"
                    placeholder="Your Email"
                    type="type"
                    name="Email"
                  />
                </div>
                <div className="col-md-12">
                  <textarea
                    className="textarea"
                    placeholder="Message"
                    type="type"
                    Message="Name"
                  ></textarea>
                </div>
                <div className="col-md-12">
                  <button className="send_btn">Submit Now</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
