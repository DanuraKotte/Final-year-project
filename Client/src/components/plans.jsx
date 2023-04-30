import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Plan1 from "../assets/images/PLAN2.png";
import "../styles/plans.css";
import Navigationbar from "./navbar";
import Footer from "./footer";

function plans() {
  return (
    <>
      <Navigationbar />
      <div className="bg-light py-5">
        <div className="container">
          <div className="row bg-light rounded my-5">
            <div className="col-12 text-center px-2 py-3">
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda impedit magnam ipsum.
              </h4>
            </div>
          </div>
          <div className="row gap-2 justify-content-between my-3">
            <div
              className="col-3 bg-success p-5 mt-5 text-center free text-light"
              style={{ width: "22vw" }}>
              <h2 className="text-uppercase pt-5">free PLAN</h2>
              <img src={Plan1} className="mt-5" />
              <h4 className="text-uppercase mt-5">up to 10 voters</h4>
              <h2 className="text-uppercase mt-4">free</h2>
              <button className="btn-1 text-uppercase fs-4 my-5">
                try now
              </button>
            </div>
            <div
              className="col-3 bg-success p-5 mt-5 pro text-light text-center"
              style={{ width: "22vw", borderRadius: "30px" }}>
              <h2 className="text-uppercase pt-5">pro PLAN</h2>
              <img src={Plan1} className="mt-5" />
              <h4 className="text-uppercase mt-5">up to 100 voters</h4>
              <h2 className="text-uppercase mt-4">$ 99.00</h2>
              <button className="btn-1 text-uppercase fs-4 my-5">
                buy now
              </button>
            </div>
            <div
              className="col-3 bg-success p-5 mt-5 expert text-light text-center"
              style={{ width: "22vw", borderRadius: "30px" }}>
              <h2 className="text-uppercase pt-5">expert PLAN</h2>
              <img src={Plan1} className="mt-5" />
              <h4 className="text-uppercase mt-5">unlimited voters</h4>
              <h2 className="text-uppercase mt-4">$ 499.00</h2>
              <button className="btn-1 text-uppercase fs-4 my-5">
                buy now
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default plans;
