import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigationbar from "./navbar";
import Footer from "./footer";
import VoteCharts from "./charts";

function dashboard() {
  return (
    <>
      <Navigationbar />
      <div className="bg-common">
        <div className="container py-5">
          <div className="text-center">
            <h2 className="text-capitalize">rotaract club</h2>
            <h4 className="text-capitalize mt-2">Election Result</h4>
          </div>
          <div
            className="my-4"
            style={{ backgroundColor: "navy", height: "2px" }}
          />
          <div
            className="d-flex gap-5 fs-4 text-white justify-content-center my-5 py-2"
            style={{ borderRadius: "30px", backgroundColor: "#4F0668" }}>
            <div className="px-5">Invited Voters: 300</div>
            <div className="px-5">Participated Voters: 295</div>
          </div>
          <div className="container pt-5 w-100">
            <div className="row my-5 justify-content-center">
              <VoteCharts />
            </div>
            <p className="py-5 text-center px-5">
              Vote securely and easily with Votely - the innovative web app
              available worldwide. Our user-friendly platform makes voting
              accessible from any time zone, and at a low cost. Join the Votely
              community today and have your voice heard. Vote securely and
              easily with Votely - the innovative web app available worldwide.
              Our user-friendly platform makes voting accessible from any time
              zone, and at a low cost. Join the Votely community today and have
              your voice heard.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default dashboard;
