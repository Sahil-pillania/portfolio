import React from "react";
import { NavLink } from "react-router-dom";
import "./CSS/Header.css";
import "./CSS/Common.css";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import InfoIcon from "@mui/icons-material/Info";

const Header = () => {
  let activeClassName = "active";

  return (
    <>
      <div className="header">
        <div className="header_data">
          <div className="left">
            <div className="logo">
              <img src="/Images/logo.png" alt="Logo-Sahil_Pillania" />
              <div>
                Sahil{" "}
                <span style={{ color: "orange", marginLeft: ".5rem" }}>
                  Pillania
                </span>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="menu">
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
      </div>
    </>
  );
};

export default Header;
