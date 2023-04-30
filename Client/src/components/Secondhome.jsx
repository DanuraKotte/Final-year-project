import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import OrgImg from "../assets/images/orgimg.png";
import NavigationBar from "./navbar";
import Footer from "./footer";
import Candidate2 from "../assets/images/candicate2.png";
import Candidate3 from "../assets/images/candidate3.png";

function Secondhome() {
  return (
    <>
      <NavigationBar />
      <div style={{ backgroundColor: "#f5f5fa" }}>
        <div className="container py-5">
          <img src={OrgImg} className="mt-5" />
          <h2>Organisation </h2>
          <div
            className="my-4"
            style={{ backgroundColor: "navy", height: "2px" }}
          />
          <h3 className="text-capitalize my-5">Current events</h3>
          <div className="row">
            <a href="" className="col-6">
              <div className="bg-info2 p-3" style={{ borderRadius: "20px" }}>
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
            <a href="" className="col-6">
              <div className="bg-info2 p-3" style={{ borderRadius: "20px" }}>
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
            <a href="" className="col-6">
              <div
                className="bg-info2 p-3 mt-5"
                style={{ borderRadius: "20px" }}>
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

            <a href="" className="col-6">
              <div
                className="bg-info2 p-3 mt-5"
                style={{ borderRadius: "20px" }}>
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

          <h3 className="text-capitalize" style={{ marginTop: "100px" }}>
            candidate advertisement
          </h3>
          <div className="row">
            <div className="d-flex gap-5 my-5 px-5">
              <img src={Candidate2} alt="" />
              <p className="w-75">
                Vote securely and easily with Votely - the innovative web app
                available worldwide. Our user-friendly platform makes voting
                accessible from any time zone, and at a low cost. Join the
                Votely community today and have your voice heard.
              </p>
            </div>
            <div className="d-flex gap-5 my-5 px-5">
              <img src={Candidate3} alt="" />
              <p className="w-75">
                Vote securely and easily with Votely - the innovative web app
                available worldwide. Our user-friendly platform makes voting
                accessible from any time zone, and at a low cost. Join the
                Votely community today and have your voice heard.
              </p>
            </div>
            <div className="d-flex gap-5 my-5 px-5">
              <img src={Candidate2} alt="" />
              <p className="w-75">
                Vote securely and easily with Votely - the innovative web app
                available worldwide. Our user-friendly platform makes voting
                accessible from any time zone, and at a low cost. Join the
                Votely community today and have your voice heard.
              </p>
            </div>
            <div className="d-flex gap-5 my-5 px-5">
              <img src={Candidate3} alt="" />
              <p className="w-75">
                Vote securely and easily with Votely - the innovative web app
                available worldwide. Our user-friendly platform makes voting
                accessible from any time zone, and at a low cost. Join the
                Votely community today and have your voice heard.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Secondhome;
