import React from "react";
import "../App.css";
import "../styles/event.css";
import SecondNavBar from "./secondnavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import InviteBg from "../assets/images/invitebg.png";

function inviteCandidate() {
  const bgstyles = {
    backgroundImage: `url(${InviteBg})`,
    backgroundRepeat: "no-repeat",
    height: "80vh",
  };
  return (
    <>
      <SecondNavBar />
      <div className="container my-5">
        <div className="row">
          <div className="col-7" style={bgstyles}></div>
          <div className="col-5 bg-light">
            <h3 className="text-center px-5 text-color1 mt-3">
              Invite Candidates
            </h3>
            <form action="" className="p-3">
              <div>
                <label htmlFor=""> Name*</label> <br />
                <input type="text" className="w-100 input2 pt-2" required />
              </div>
              <div className="pt-5">
                <label htmlFor=""> Competing Position*</label> <br />
                <input type="text" className="w-100 input2 pt-2" required />
              </div>
              <div className="pt-5">
                <label htmlFor=""> Current Position*</label> <br />
                <input type="text" className="w-100 input2 pt-2" required />
              </div>

              <div className="pt-5">
                <label htmlFor="">Email*</label> <br />
                <input type="email" className="w-100 input2 pt-2" />
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
                <button className="create-btn mt-3">Invite</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <footer />
    </>
  );
}

export default inviteCandidate;
