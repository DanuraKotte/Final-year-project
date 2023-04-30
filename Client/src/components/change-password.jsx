import React from "react";
import "../App.css";
import "../styles/inputs.css";
import "../styles/btn-styles.css";
import "../styles/texts.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Navigate } from "react-router-dom";
import SideBg from "../assets/images/127login.png";
import BigLogo from "../assets/images/biglogo.png";

function changePassword() {
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
              <h2 className="pt-5">Change Password</h2>
              <div
                className="mt-4 mb-5"
                style={{ backgroundColor: "darkblue", height: "2px" }}
              />

              <form action="" className="my-5 w-100">
                <input
                  type="password"
                  placeholder="Enter New Password"
                  className="login-input-style my-4 h-50"
                  required
                />{" "}
                <br />
                <input
                  type="password"
                  placeholder="Confirm New Password"
                  className="login-input-style my-4 h-50"
                  required
                />
                <Link to="#">
                  <button className="btn-1 w-75 mt-5">Confirm Password</button>
                </Link>
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

export default changePassword;
