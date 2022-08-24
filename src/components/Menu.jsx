import React from "react";
import { NavLink } from "react-router-dom";
import "./CSS/Menu.css";
import "./CSS/Common.css";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import InfoIcon from "@mui/icons-material/Info";
import "./JS/script.js";

const Menu = () => {
  let activeClassName = "active";
  return (
    <>
      <span id="black"></span>
      <div className="outer" id="nav">
        <div className="inner">
          <div className="text">MENU</div>
          <hr />
          <div className="sMenu">
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                  }
                >
                  <Button variant="outlined" startIcon={<HomeIcon />}>
                    Home
                  </Button>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="contact"
                  className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                  }
                >
                  <Button variant="outlined" startIcon={<ContactMailIcon />}>
                    Contact Me
                  </Button>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="about"
                  className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                  }
                >
                  <Button variant="outlined" startIcon={<InfoIcon />}>
                    About Me
                  </Button>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
