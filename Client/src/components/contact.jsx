import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/contactus.css";

function contact() {
  return (
    <>
      <div className="container" style={{ height: "28vh" }}>
        <div className="d-flex justify-content-center text-light mt-5">
          <h1 className="pt-5">Contact Us</h1>
        </div>
        <div className="" style={{ backgroundColor: "white", height: "1px" }} />
      </div>
      <div className="bg-white pb-5">
        <div className="container pb-5">
          <div className="row py-5" style={{ height: "70vh" }}>
            <div className="col-5  py-5 ps-5 text-white general-image">
              <h3 className="ps-5">Contact Information</h3>
              <ul className="ps-5">
                <li className="py-4">
                  <p>info@votely.com</p>
                </li>
                <li>
                  <p> +44 23232336</p>
                </li>
              </ul>
            </div>
            <div className="col-7 p-5 bg-dark text-light">
              <h3 className="ps-5">Get in Touch</h3>
              <form action="">
                <div className="pt-5 ps-5">
                  <label htmlFor=""> Name</label> <br />
                  <input type="text" className="w-75 input2 pt-2" required />
                </div>
                <div className="py-3 ps-5">
                  <label htmlFor="">Email</label> <br />
                  <input type="email" className="w-75 input2 pt-2" required />
                </div>
                <div className="py-3 ps-5">
                  <label htmlFor="">Message</label> <br />
                  <textarea
                    className="w-75 textarea-border"
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    style={{
                      backgroundColor: "transparent",
                    }}
                  />
                </div>
                <div className="d-flex mt-4 ps-5">
                  <button type="submit" className="w-25 btn-1">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default contact;
