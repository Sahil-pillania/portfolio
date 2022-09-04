import React from "react";
import "./CSS/AboutMe.css";
import about from "../Images/about.gif";

const AboutMe = () => {
  return (
    <div className="AboutPage">
      <div className="Main">
        <div className="container">
          <div className="right">
            <div className="logoHome">
              <img src={about} alt="" />
            </div>
          </div>
          <div className="left">
            <div className="info">
              <h6>
                I am a Front End developer with some experience building
                websites and web applications. I specialize in JavaScript and
                have some experience working with React and Node. I also have
                experience working with Php, mySql.
              </h6>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="data">
            <div className="skills">
              <h3>
                <u>Technical skills:</u>
              </h3>
              <ol type="I">
                <li>
                  Coding: Common programming languages include HTML, PHP,
                  cascading style sheets, and JavaScript for front-end design.
                  Consider learning Python, Java, or Ruby if you want to do
                  back-end development.
                </li>
                <li>
                  Responsive design: People use a variety of devices to view
                  websites. Developers should be able to create sites that look
                  as good on smartphones and tablets as they do on computer
                  screens.
                </li>
                <li>
                  Technical SEO: Many factors of website design can affect the
                  site's search engine ranking. Understanding how search engines
                  rank sites is useful in a developer's work/
                </li>
                <li>
                  Version control: This lets you track and control changes to
                  the source code without starting over from the beginning each
                  time you run into a problem.
                </li>
                <li>
                  Visual design: Understanding basic design principles, such as
                  how to use white space, choose fonts, and incorporate images
                  could boost your marketability.
                </li>
              </ol>
            </div>
            <div className="tasks">
              <h3>
                <u>Tasks and responsibilities:</u>
              </h3>
              <h5>
                As a web developer, I could work for a company or agency, or as
                a freelancer taking on projects for individual clients. My tasks
                will vary depending on your work situation, but day-to-day
                responsibilities might generally include:
              </h5>
              <br />
              <ul>
                <li>Designing user interfaces and navigation menus</li>
                <li>
                  Writing and reviewing code for sites, typically HTML, XML, or
                  JavaScript
                </li>
                <li>Integrating multimedia content onto a site</li>
                <li>Testing web applications</li>
                <li>
                  Troubleshooting problems with performance or user experience
                </li>
                <li>
                  Collaborating with designers, developers, and stakeholders
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
