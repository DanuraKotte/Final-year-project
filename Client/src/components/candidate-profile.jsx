import React from "react";
import "../App.css";
import "../styles/event.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Profilebg from "../assets/images/profilebg1.png";
import ProfileImg from "../assets/images/profilepic1.png";

function candidateProfile() {
  const bgstyles = {
    backgroundImage: `url(${Profilebg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "19vh",
  };
  return (
    <>
      <div className="container my-5">
        <div style={bgstyles}></div>
        <div className=" px-4 py-3" style={{ backgroundColor: "#8248CC" }}>
          <div className="bg-light rounded p-5" style={{ marginTop: "-50px" }}>
            <div
              className="d-flex rounded ps-3 gap-5"
              style={{ backgroundColor: "#D9D9D9" }}>
              <div style={{ position: "relative" }}>
                <img
                  src={ProfileImg}
                  alt="ProfileImg"
                  className="py-3"
                  style={{ position: "absolute", left: "-45px", top: "0" }}
                />
              </div>
              <div
                className="p-4"
                style={{ marginLeft: "80px", height: "22vh" }}>
                <h3 className="text-uppercase">GILL HYSLop</h3>
                <input
                  type="text"
                  placeholder="TYPE BIO..."
                  style={{ width: "40vw" }}
                />
              </div>
            </div>
            <div className="d-flex gap-2 ms-2 pt-4">
              <div
                className="col-7 p-1 rounded"
                style={{ backgroundColor: "#D9D9D9" }}>
                <p className="text-uppercase text-center pt-3">
                  Statement OF POLICY
                </p>
                <textarea
                  className="w-75"
                  placeholder="TYPE..."
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  style={{ height: "43vh" }}></textarea>
              </div>
              <div className="col-5" style={{ backgroundColor: "#D9D9D9" }}>
                Hi
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default candidateProfile;
