import React from "react";
import "./CSS/Home.css";

const Home = () => {
  return (
    <div className="HomePage">
      <div className="Main">
        <div className="container">
          <div className="left">
            <div className="info">
              <h1>
                <span>S</span>ahil <span>P</span>illania
              </h1>
              <h3>I am a Developer.</h3>
              <h6>I am pursuing MERN stack nowdays.</h6>
            </div>
          </div>
          <div className="right">
            <div className="logoHome">
              <img src="./Images/logo.png" alt="" />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="right">
            <div className="logoHome">
              <img src="./Images/gif.gif" alt="" />
            </div>
          </div>
          <div className="left">
            <div className="info">
              <h6>
                I am a Front End developer with beginner level experience
                building websites and web applications. I specialize in
                JavaScript and have begginer level experience working with React
                and Node. I also have experience working with Php, mySql.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
