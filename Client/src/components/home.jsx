import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../styles/btn-styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ServiceImg from "../assets/images/service.png";
import choose from "../assets/images/vote 5.png";
import Vote from "../assets/images/vote 2.png";
import Checked from "../assets/images/checked.png";
import Steps from "../assets/images/StepGroup.png";
import Navigationbar from "./navbar";
import Footer from "./footer";

function home() {
  return (
    <>
      <Navigationbar />
      {/* banner*/}
      <div class="container-fluid px-5">
        <div class="row align-items-between ms-5 py-5">
          <div class="col-md-8 ps-5 text-light ">
            <h1 className="w-75">
              Revolutionize the Way You Vote: Fast, Secure, and Easy
            </h1>
            <p className="pt-5 w-75">
              Vote securely and easily with Votely - the innovative web app
              available worldwide. Our user-friendly platform makes voting
              accessible from any time zone, and at a low cost. Join the Votely
              community today and have your voice heard.
            </p>
            <Link to="/plans">
              <button className="my-5 btn-3">Get Started</button>
            </Link>
          </div>
          <div class="col-md-4 ps-2">
            <img src={Vote} class="ps-5 pt-5 floating" alt="Your image" />
          </div>
        </div>
      </div>

      {/* why choose*/}
      <div className="fw-semibold home-bg">
        <div className="container">
          <div>
            <h3 className="text-capitalize pt-5">what Makes Us Unique </h3>
            <div className="row mt-5">
              <div className="col-5">
                <img src={choose} alt="" />
              </div>
              <div className="col-1"></div>
              <div className="col-6">
                <div className="d-flex">
                  <div className="d-flex">
                    <div>
                      <img src={Checked} />
                    </div>
                    <div className="mb-5">
                      <div className="ms-4">24/7 Availability</div>
                      <div className="ms-4">
                        Votely is available 24/7, allowing voters to cast their
                        ballots anytime that is convenient for them.
                      </div>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div>
                      <img src={Checked} />
                    </div>
                    <div>
                      <div className="ms-4">Low Cost</div>
                      <div className="ms-4">
                        Votely offers an affordable voting solution without
                        compromising on security and accuracy.
                      </div>
                    </div>
                  </div>
                </div>

                {/* start a another flex*/}
                <div className="d-flex">
                  <div className="d-flex">
                    <div>
                      <img src={Checked} />
                    </div>
                    <div>
                      <div className="ms-4">24/7 Availability</div>
                      <div className="ms-4">
                        Votely is available 24/7, allowing voters to cast their
                        ballots anytime that is convenient for them.
                      </div>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div>
                      <img src={Checked} />
                    </div>
                    <div>
                      <div className="ms-4">Low Cost</div>
                      <div className="ms-4">
                        Votely offers an affordable voting solution without
                        compromising on security and accuracy.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* intructions*/}
        <div className="bg-ins mt-5 py-5">
          <div className="container">
            <div className="row g-5 w-100">
              <div className="col-8">
                <h2 className="text-capitalize">
                  How to use{" "}
                  <span className="text-color1" style={{ fontSize: "64px" }}>
                    Votely ?
                  </span>
                </h2>
                <div class="py-5">
                  <p class="">
                    Welcome to our voting app! We're thrilled that you're taking
                    the first step towards making your voice heard. Our mission
                    is to make the voting process as easy and accessible as
                    possible. With our app, you'll be able to cast your ballot
                    with confidence and ease. Let's do this together and make a
                    difference in our community. Follow the steps in our Voting
                    How-To and let's get started!
                  </p>
                  <button className="btn-1 mt-3 text-white">View More</button>
                </div>
              </div>
              <div className="col-2"></div>
              <div className="col-2">
                <img src={Steps} className="ms-3 mt-2" />
              </div>
            </div>
          </div>
        </div>

        {/* our service*/}
        <div className="container py-5">
          <div className="row g-5 pt-5 w-100">
            <div className="col-8">
              <h2 className="text-capitalize">Our service</h2>
              <div className="py-5">
                <p class="">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque, Sed ut perspiciatis unde omnis iste
                  natus error sit voluptatem accusantium doloremque Sed ut
                  perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque, Sed ut perspiciatis unde omnis iste
                  natus error sit voluptatem accusantium doloremque
                </p>
                <button className="mt-3 btn-1">View More</button>
              </div>
            </div>
            <div className="col-2"></div>
            <div className="col-2 boder-2">
              <div class="col-2">
                <img src={ServiceImg} className="mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default home;
