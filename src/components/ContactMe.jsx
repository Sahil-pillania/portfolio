import React, { useState } from "react";
import "./CSS/ContactMe.css";

const ContactMe = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    data: "",
  });

  const onChangeEvent = (event) => {
    // console.log(event.target.value);
    // const value = event.target.value;
    // const name = event .target.value;

    const { name, value } = event.target;

    setData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    alert("Data saved");
    setTimeout(() => {
      setData("");
    }, 2000);
  };

  return (
    <div className="ContactPage">
      <section>
        <div className="container1">
          <div className="contactForm">
            <form onSubmit={onSubmit}>
              <h2>Send a Message</h2>
              <div className="formBox w100">
                <div className="inputBox w50">
                  <input
                    type="text"
                    name="name"
                    onChange={onChangeEvent}
                    id="name"
                    value={data.name}
                    required
                  />
                  <span>Name</span>
                </div>
                <div className="inputBox w50">
                  <input
                    type="email"
                    name="email"
                    onChange={onChangeEvent}
                    id="email"
                    value={data.email}
                    required
                  />
                  <span>email</span>
                </div>
                <div className="inputBox w100">
                  <input
                    type="number"
                    name="phone"
                    onChange={onChangeEvent}
                    id="phone"
                    value={data.phone}
                    required
                  />
                  <span>Mobile No.</span>
                </div>
                <div className="inputBox w100">
                  <textarea
                    rows="4"
                    cols="50"
                    name="data"
                    onChange={onChangeEvent}
                    id="data"
                    value={data.data}
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
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactMe;
