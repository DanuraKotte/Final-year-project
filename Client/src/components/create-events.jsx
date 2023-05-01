import React from "react";
import "../App.css";
import "../styles/event.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SecondNavBar from "./secondnavbar";
import Footer from "./footer";
import ElectionBg from "../assets/images/electionbg.png";

function createEvents() {
  const bgstyles = {
    backgroundImage: `url(${ElectionBg})`,
    backgroundRepeat: "no-repeat",
    height: "",
  };

  return (
    <>
      <SecondNavBar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 vh-100" style={bgstyles}></div>
          <div className="col-6 vh-100 bg-light p-5">
            <div className=" d-flex items-align-center px-5">
              <div>
                <h2 className="text-center mt-5">
                  Authorize Your Voters Create Private Elections
                </h2>
                <form action="" className=" m-auto">
                  <div>
                    <label htmlFor=""> Event Name*</label> <br />
                    <input type="text" className="w-100 input2 pt-2" required />
                  </div>
                  <div className="pt-5">
                    <label htmlFor=""> Date*</label> <br />
                    <input type="date" className="w-100 input2 pt-2" required />
                  </div>
                  <div className="pt-5">
                    <label htmlFor=""> Time Zone*</label> <br />
                    <select
                      id="timezone"
                      name="timezone"
                      className="w-100 input2 pt-2"
                      required>
                      <option value="UTC-12:00">
                        (UTC-12:00) International Date Line West
                      </option>
                      <option value="UTC-11:00">
                        (UTC-11:00) Coordinated Universal Time-11
                      </option>
                      <option value="UTC-10:00">(UTC-10:00) Hawaii</option>
                      <option value="UTC-09:00">(UTC-09:00) Alaska</option>
                      <option value="UTC-08:00">
                        (UTC-08:00) Pacific Time (US & Canada)
                      </option>
                    </select>
                  </div>
                  <div className="pt-5">
                    <label htmlFor="">Event Description</label> <br />
                    <input type="text" className="w-100 input2 pt-2" />
                  </div>
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
                        <a href="" className="terms">
                          Terms and Coditions
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button className="create-btn mt-3">Create Event</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default createEvents;
