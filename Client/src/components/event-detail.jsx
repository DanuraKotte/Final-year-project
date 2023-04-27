import React from "react";
import "../App.css";
import "../styles/event.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ElectionDetailBg from "../assets/images/event-detailsbg.png";

function eventDetail() {
  const bgstyles = {
    backgroundImage: `url(${ElectionDetailBg})`,
    backgroundRepeat: "no-repeat",
    height: "80vh",
  };
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-7" style={bgstyles}>
            <h2 className="text-color1 text-center mt-5">
              <u> Presidential Election 2023</u>
            </h2>
            <p className="px-4 mt-5">
              Welcome to the Presidential Election! This is your chance to cast
              your vote and have a say in who will lead our country for the next
              term. Our candidates come from a variety of backgrounds and each
              have their own unique vision for our nation's future. As you
              review their platforms and engage with their campaigns, we
              encourage you to consider the issues that matter most to you and
              to make an informed decision when casting your vote. The future of
              our country is in your hands - let's make it a bright one!
            </p>
            <div className="ps-4 pt-3">
              <h5>Date: 25.04.2023</h5>
              <h5 className="pt-2">Time Zone: UTC +5.30</h5>
            </div>
          </div>
          <div className="col-5 bg-light">
            <h3 className="text-center px-5 text-color1 mt-3">
              Election Details
            </h3>
            <form action="" className="p-3">
              <div>
                <label htmlFor=""> Start Time*</label> <br />
                <input type="time" className="w-100 input2 pt-2" required />
              </div>
              <div className="pt-5">
                <label htmlFor=""> End Time*</label> <br />
                <input type="time" className="w-100 input2 pt-2" required />
              </div>
              <div className="pt-5">
                <label htmlFor=""> Start Date*</label> <br />
                <input type="date" className="w-100 input2 pt-2" required />
              </div>

              <div className="pt-5">
                <label htmlFor="">Number of Candidates*</label> <br />
                <input type="number" className="w-100 input2 pt-2" required />
              </div>
              <div className="d-flex justify-content-center"></div>
              <div className="d-flex justify-content-center gap-4 mt-5">
                <button className="create-btn mt-3">Invite Voters</button>
                <button className="create-btn mt-3">Invite Candidates</button>
                <button className="create-btn mt-3">Publish </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default eventDetail;
