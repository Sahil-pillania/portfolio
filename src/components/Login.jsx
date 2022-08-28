import React, { useState } from "react";
import "./CSS/Login.css";
// import Button from "@mui/material/Button";
import "./CSS/Common.css";

const Login = () => {
  const [name, setName] = useState();
  const [pass, setPass] = useState();

  const onchange = (e) => {
    setName(e.target.value);
  };
  const onchange2 = (e) => {
    setPass(e.target.value);
  };

  const submitForm = () => {
    alert("Form submitted");
    alert(`your name is ${name} and password is ${pass}`);
  };
  return (
    <div className="Login">
      <div className="Main">
        <div className="imgLogin">
          <div className="center">
            <img src="./Images/login.gif" alt="" />
          </div>
        </div>
        <div className="Form">
          <div className="inner">
            <h2>Login</h2>
            <form onSubmit={submitForm}>
              <div className="formData">
                <div className="userName input">
                  <label htmlFor="name">User Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={onchange}
                    value={name}
                  />
                </div>
                <div className="password input">
                  <label htmlFor="name">User password:</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={onchange2}
                    value={pass}
                  />
                </div>
                <div className="submit">
                  <input type="submit" id="Login" name="Login" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
