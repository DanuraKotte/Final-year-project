import React from "react";
import "../App.css";
import Navigationbar from "./navbar";
import Footer from "./footer";

function proPlan() {
  return (
    <>
      <Navigationbar />
      <div className="container" style={{ height: "32vh" }}>
        <div className="d-flex justify-content-center text-light mt-5">
          <h1 className="pt-5 text-capitalize">expert plan</h1>
        </div>
        <div
          className="mt-4"
          style={{ backgroundColor: "white", height: "1px" }}
        />
      </div>
      <div className="vh-100 bg-common d-flex items-align-center">
        <h3 className="m-auto">Coming soon</h3>
      </div>
      <Footer />
    </>
  );
}

export default proPlan;
