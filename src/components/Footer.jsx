import React from "react";
import { useNavigate } from "react-router-dom";
import "./CSS/Footer.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="footer">
        <div className="backButton">
          <Button>
            <ArrowBackIcon onClick={() => navigate(-1)} />
          </Button>
        </div>
        <div className="tag">Copyright &copy; Sahil Pillania</div>
      </div>
    </>
  );
};

export default Footer;
