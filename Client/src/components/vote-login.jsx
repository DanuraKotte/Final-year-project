import React from "react";
import "../App.css";
import "../styles/inputs.css";
import "../styles/btn-styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import VoteLoginBg from "../assets/images/voteloginbg.png";
import HourGlass from "../animations/hourglass";
import CountdownTimer from "./countdown";

function voteLogin() {
  const bgstyles = {
    backgroundImage: `url(${VoteLoginBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-5 vh-100 text-white text-center d-flex align-items-center"
            style={bgstyles}>
            <div className="m-auto px-4">
              <h1>Presidential Election 2023</h1>
              <p className="py-5">
                Welcome to the Presidential Election! This is your chance to
                cast your vote and have a say in who will lead our country for
                the next term. Our candidates come from a variety of backgrounds
                and each have their own unique vision for our nation's future.{" "}
              </p>
            </div>
          </div>
          <div className="col-7 bg-common vh-100 text-center d-flex align-items-center">
            <div className="m-auto">
              <div className="row justify-content-center">
                <HourGlass />
                <CountdownTimer targetDate="2023-05-01T01:00:00" />

                <form action="" className="mt-5">
                  <input
                    className="input-style w-100 h-50"
                    type="email"
                    placeholder="Enter Your Email"
                  />{" "}
                  <br />
                  <button className="btn-1 w-75 mt-3">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default voteLogin;
