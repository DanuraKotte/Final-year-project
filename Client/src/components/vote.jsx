import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Votebg from "../assets/images/votebg.png";
import Countdown from "./countdown";
import CheckBoxes from "../components/vote-checkbox";
import UserImg from "../assets/images/user2.png";

function vote() {
  const bgstyles = {
    backgroundImage: `url(${Votebg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    opacity: "0.6",
    backgroundColor: "#D9D9D9",
  };
  const bgColor = {
    backgroundColor: "#d3d3d3",
    opacity: "0.6",
  };
  return (
    <>
      <div className="container">
        <div style={bgstyles} className="row mt-5 justify-content-center">
          <div className="col-2"></div>
          <div className="col-8">
            <h2 className="text-center py-5">
              <u>Presidential Election 2023</u>
            </h2>
            <h6 className="text-center py-5">
              Welcome to the Presidential Election! This is your chance to cast
              your vote and have a say in who will lead our country for the next
              term. Our candidates come from a variety of backgrounds and each
              have their own unique vision for our nation's future. As you
              review their platforms and engage with their campaigns, we
              encourage you to consider the issues that matter most to you and
              to make an informed decision when casting your vote. The future of
              our country is in your hands - let's make it a bright one!
            </h6>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h3 className="text-light text-center">Remaining</h3>
                  <Countdown hours={0} minutes={0} seconds={10} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-2"></div>
        </div>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-8">
            <form className="d-flex flex-column gap-3 my-5">
              <div
                className="form-check form-check-inline w-50 ps-5 py-1 rounded"
                style={bgColor}>
                <label className="form-check-label d-flex justify-content-between gap-5">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="checkboxOption"
                    id="checkbox1"
                    value="option"
                  />
                  <div>
                    <h4>Candidate1</h4>
                    <h5 className="text-center">######</h5>
                  </div>
                  <img src={UserImg} alt="checkbox image" />
                </label>
              </div>
              <div
                className="form-check form-check-inline w-50 ps-5 py-1 rounded"
                style={bgColor}>
                <label className="form-check-label d-flex justify-content-between gap-5">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="checkboxOption"
                    id="checkbox1"
                    value="option2"
                  />
                  <div>
                    <h4>Candidate2</h4>
                    <h5 className="text-center">######</h5>
                  </div>
                  <img src={UserImg} alt="checkbox image" />
                </label>
              </div>
              <div
                className="form-check form-check-inline w-50 ps-5 py-1 rounded"
                style={bgColor}>
                <label className="form-check-label d-flex justify-content-between gap-5">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="checkboxOption"
                    id="check1"
                    value="option3"
                  />
                  <div>
                    <h4>Candidate3</h4>
                    <h5 className="text-center">######</h5>
                  </div>
                  <img src={UserImg} alt="checkbox image" />
                </label>
              </div>
              <div className="d-flex w-50 text-center">
                <button className="mx-auto btn-1 w-50 mt-4">Vote</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default vote;
