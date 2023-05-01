import React, { useState } from "react";
import "../App.css";
import "../styles/inputs.css";
import "../styles/btn-styles.css";
import "../styles/texts.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import SideBg from "../assets/images/127login.png";
import BigLogo from "../assets/images/biglogo.png";
import axios from "axios";

function register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
  
    const { name, email, password, repassword } = user;
  
    if (name && email && password) {
      if (password === repassword) {
        try {
          const response = await axios.post("http://localhost:8080/register", user);
          alert(response.data.message);
        } catch (error) {
          console.error(error);
        }
      } else {
        alert("Check your password");
      }
    }
  };

  const bgstyles = {
    backgroundImage: `url(${SideBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div className="container-fluid">
      <div className="row vh-100">
        <div className="col-5 bg-common text-center pt-5 d-flex align-items-center">
          <div className="mx-auto">
            <h1 className="pt-5">Register</h1>
            <div
              className="mt-4 mb-5"
              style={{ backgroundColor: "darkblue", height: "2px" }}
            />
            <p>To get started, please register for an account</p>
            <form action="" className="my-5 w-100">
              <input
                type="text"
                placeholder="Oraganisation Name"
                className="login-input-style mt-4 h-50"
                name="name"
                value={user.name}
                onChange={handleChange}
                required
              />{" "}
              <br />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="login-input-style mt-4 h-50"
                name="email"
                value={user.email}
                onChange={handleChange}
                required
              />{" "}
              <br />
              <input
                type="password"
                placeholder="Password"
                className="login-input-style mt-4 h-50"
                name="password"
                value={user.password}
                onChange={handleChange}
                required
              />
              <br />
              <input
                type="password"
                placeholder="Re-enter Password"
                name="repassword"
                value={user.repassword}
                onChange={handleChange}
                className="login-input-style mt-4 h-50"
                required
              />
              <div className="d-flex justify-content-center">
                <div class="form-check text-center mt-5">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="defaultCheck1"
                  />
                  <span class="form-check-label" for="defaultCheck1">
                    I agree with the website's{" "}
                    <a href="/terms" className="terms" target="_blank">
                      Terms and Coditions
                    </a>
                  </span>
                </div>
              </div>
              <Link to="/login">
                <button className="btn-1 w-75 mt-5" onClick={handleSubmit}>Register</button>
              </Link>
              <div className="mt-5">
                <span>Already have an account?</span>
                <Link to="/login" className="ps-3 text-1 fw-semibold ">
                  Login
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
            <p className="py-5 text-capitalize">
              create and manage online elections. Gather votes from anywhere.
              Fill out the form with your details and start creating elections
              immediately. Choose our app for successful and fair elections
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default register;