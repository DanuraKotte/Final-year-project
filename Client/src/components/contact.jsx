import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/contactus.css";
import Navigationbar from "./navbar";
import Footer from "./footer";

function contact() {
  return (
    <>
      <Navigationbar />
      <div>
        <div className="container" style={{ height: "32vh" }}>
          <div className="d-flex justify-content-center text-light mt-5">
            <h1 className="pt-5">Contact Us</h1>
          </div>
          <div
            className="mt-4"
            style={{ backgroundColor: "white", height: "1px" }}
          />
        </div>
        <div className="py-5" style={{ backgroundColor: "#f5f5fa" }}>
          <div className="container">
            <div
              className="row mt-3 p-3 shadow"
              style={{
                height: "69vh",
                borderRadius: "30px",
                border: "1px solid",
                borderColor: "blue",
              }}>
              <div
                className="col-5 py-5 ps-5 text-black fs-1"
                style={{
                  borderRight: "1px solid",
                  borderRightColor: "gray",
                }}>
                <h3 className="">Contact Information</h3>
                <ul className="ps-5">
                  <li className="py-4">
                    <p>info@votely.com</p>
                  </li>
                  <li>
                    <p> +44 23232336</p>
                  </li>
                </ul>
              </div>
              <div
                className="col-7 p-5 text-light bg-dark"
                style={{
                  borderTopRightRadius: "30px",
                  borderBottomRightRadius: "30px",
                }}>
                <h3 className="ps-5">Get in Touch</h3>
                <form action="">
                  <div className="pt-4 ps-5">
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
      </div>
      <Footer />
    </>
  );
}

export default contact;
