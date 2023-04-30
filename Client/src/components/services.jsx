import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import bgimage from "../assets/images/bg1.png";
import { Link } from "react-router-dom";
import Navigationbar from "./navbar";
import Footer from "./footer";

function services() {
  const bgstyles = {
    backgroundImage: `url(${bgimage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "95vh",
  };
  return (
    <>
      <Navigationbar />
      <div className="container my-5">
        <div className="row g-0 rounded" style={bgstyles}>
          <div className="col-6 ps-5 pt-5 position-relative">
            <h3 className="text-color1">Create New Event</h3>
            <p className="pt-5 w-75">
              Remember, your voice matters. By creating an election event on our
              platform, you're helping to shape the future of your community.
              Thank you for choosing to be a part of the democratic process!
            </p>
            <div className="d-flex gap-5 -ps-2 mt-5 position-absolute bottom-50 w-100">
              <Link to="/events" type="button" className="btn-2">
                Create Event
              </Link>
              <button className="btn-2">View Event</button>
            </div>
          </div>
          <div className="col-6">
            <div className="pt-5 px-5">
              <a href="">
                <div className="bg-info2 p-3">
                  <h3 className="text-color1">Presidential Election 2023 </h3>
                  <div className="d-flex g-3 pt-2">
                    <div>
                      <p>Start date : 01/04/2023</p>
                      <p>End date : 02/04/2023</p>
                      <p>Time Zone : UTC +0 UK</p>
                    </div>
                    <div className="ps-5">
                      <h5 className="bg-success rounded-pill p-2 text-light">
                        2 days 6h 15min
                      </h5>
                    </div>
                  </div>
                </div>
              </a>
              <a href="">
                <div className="bg-info2 p-3 mt-3">
                  <h3 className="text-color1">Presidential Election 2023 </h3>
                  <div className="d-flex g-3 pt-2">
                    <div>
                      <p>Start date : 01/04/2023</p>
                      <p>End date : 02/04/2023</p>
                      <p>Time Zone : UTC +0 UK</p>
                    </div>
                    <div className="ps-5">
                      <h5 className="bg-success rounded-pill p-2 text-light">
                        2 days 6h 15min
                      </h5>
                    </div>
                  </div>
                </div>
              </a>
              <a href="">
                <div className="bg-info2 p-3 mt-3">
                  <h3 className="text-color1">Presidential Election 2023 </h3>
                  <div className="d-flex g-3 pt-2">
                    <div>
                      <p>Start date : 01/04/2023</p>
                      <p>End date : 02/04/2023</p>
                      <p>Time Zone : UTC +0 UK</p>
                    </div>
                    <div className="ps-5">
                      <h5 className="bg-success rounded-pill p-2 text-light">
                        2 days 6h 15min
                      </h5>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default services;
