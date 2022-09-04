import React from "react";
import { NavLink } from "react-router-dom";
import "./CSS/Header.css";
import "./CSS/Common.css";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import InfoIcon from "@mui/icons-material/Info";
import LoginIcon from "@mui/icons-material/Login";
import logo from "../Images/logo.png";
// import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  let activeClassName = "active";

  return (
    <>
      <div className="header">
        <div className="header_data">
          <div className="left">
            <NavLink to="/" className="logoLink">
              <div className="logo">
                <img src={logo} alt="Logo-Sahil_Pillania" />
                <div>
                  Sahil
                  <span style={{ color: "orange", marginLeft: ".5rem" }}>
                    Pillania
                  </span>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="img">
            <img src="/Images/square.png" id="toggler" alt="toggler" />
            {/* <img src="/Images/cancel.png" alt="" /> */}
          </div>
          <div className="rightSide">
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
                <li>
                  <NavLink
                    to="Login"
                    className={({ isActive }) =>
                      isActive ? activeClassName : undefined
                    }
                  >
                    <Button variant="success" startIcon={<LoginIcon />}>
                      Login
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
