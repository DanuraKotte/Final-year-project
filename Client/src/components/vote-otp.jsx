import React from "react";

function voteOtp() {
  const bgstyles = {
    backgroundImage: `url(${Votebg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    opacity: "0.6",
    backgroundColor: "#D9D9D9",
  };
  return (
    <>
      <div className="container">
        <div style={bgstyles} className="row mt-5">
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
          </div>
          <div className="col-2"></div>
        </div>
        <div className="row" style={{ backgroundColor: "#383737" }}>
          <div className="col-2"></div>
          <div className="col-8 text-center my-5">
            <h3 className="text-color2">
              Welcome to Presidential Election 2023
            </h3>
            <form action="">
              <h5 className="py-2 text-light">Enter your verified Email *</h5>
              <input type="email" name="" id="" className="w-50 p-2" />
              <div class="d-flex justify-content-center form-check mt-4">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                />
                <span class="form-check-label text-light" for="defaultCheck1">
                  I agree with the website's{" "}
                  <a href="" className="terms">
                    Terms and Coditions
                  </a>
                </span>
              </div>
              <button className="create-btn mt-3">Create Event</button>
            </form>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </>
  );
}

export default voteOtp;
