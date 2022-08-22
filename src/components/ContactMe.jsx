import React from "react";
import "./CSS/ContactMe.css";

const ContactMe = () => {
  return (
    <div className="ContactPage">
      {/* <div classNameName="Main">
        <div classNameName="flex">
          <div classNameName="icon">
            <div classNameName="image">
              <img src="" alt="" />
            </div>
          </div>
          <div classNameName="form">

          </div>
        </div>
        <div classNameName="socials"></div>
      </div> */}

      <section>
        <div className="container1">
          <div className="contactForm">
            <h2>Send a Message</h2>
            <div className="formBox w100">
              <div className="inputBox w50">
                <input type="text" name="name" id="name" required />
                <span>Name</span>
              </div>
              <div className="inputBox w50">
                <input type="email" name="email" id="email" required />
                <span>email</span>
              </div>
              <div className="inputBox w100">
                <input type="number" name="phone" id="phone" required />
                <span>Mobile No.</span>
              </div>
              <div className="inputBox w100">
                <textarea
                  rows="4"
                  cols="50"
                  name="data"
                  id="data"
                  required
                ></textarea>
                <span>Your query</span>
              </div>
              <div className="inputBox w100">
                <input
                  type="submit"
                  name="submit"
                  id="submit"
                  value="Submit"
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactMe;
