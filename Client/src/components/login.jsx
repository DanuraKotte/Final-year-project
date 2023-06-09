import React, { useState } from "react";
import "../App.css";
import "../styles/inputs.css";
import "../styles/btn-styles.css";
import "../styles/texts.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Navigate } from "react-router-dom";
import SideBg from "../assets/images/127login.png";
import BigLogo from "../assets/images/biglogo.png";
// import {useHistory} from "react-router-dom"
import axios from "axios";

function login() {

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser ((preve) => {
        return{
          ...preve,
          [name] : value
        }
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/login", user)
    .then(res => alert(res.data.message))
  }
  
  console.log(user)

  const bgstyles = {
    backgroundImage: `url(${SideBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row vh-100">
          <div className="col-5 bg-common text-center pt-5 d-flex align-items-center">
            <div className="mx-auto">
              <h1 className="pt-5">Login</h1>
              <div
                className="mt-4 mb-5"
                style={{ backgroundColor: "darkblue", height: "2px" }}
              />
              <form  action="" className="my-5 w-100">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="login-input-style my-4 h-50"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  required
                />
                <br />
                <input
                  type="password"
                  placeholder="Password"
                  className="login-input-style h-50"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  required
                />
                <div className="pt-1" style={{ fontSize: "14px" }}>
                  <Link to="/forgotpw " className="text-2">
                    Forgot password?
                  </Link>
                </div>
                <Link to="#">
                  <button onClick={handleSubmit} className="btn-1 w-75 mt-5" >Login</button>
                </Link>
                <div className="mt-5">
                  <span>Don't have an account?</span>
                  <Link to="/register" className="ps-3 text-1 fw-semibold ">
                    Register
                  </Link>
                </div>
              </form>
            </div>
          </div>
          <div
            className="col-7 bg-common text-white text-center d-flex align-items-center"
            style={bgstyles}>
            <div className="mx-auto ps-5 w-75">
              <img src={BigLogo} className="px-5" /> <br />
              <p className="py-5">
                Votely enables secure global voting, accessible to all. Vote
                anytime, anywhere, and have your voice heard. Join the community
                for democratic participation with ease.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default login;
