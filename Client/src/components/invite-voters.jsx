import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/inputs.css";
import Navigationbar from "./navbar";
import Footer from "./footer";

function inviteVoters() {
  return (
    <>
      <Navigationbar />
      <div className="bg-common vh-100">
        <div className="container">
          <div className="py-5  text-center">
            <h2 className="text-capitalize py-5">invite voters</h2>
            <div className="d-flex justify-content-between gap-5">
              <div
                className="p-5 w-75"
                style={{
                  backgroundColor: "#fffff6",
                  borderRadius: "25px",
                  border: "1px solid blue",
                }}>
                <h3 className="text-capitalize">insert email list</h3>
                <p className="py-4">Add voters email list by typing them</p>
                <button className="mt-5 btn-1 text-capitalize w-25">
                  insert
                </button>
              </div>
              <div
                className="p-5 w-75"
                style={{
                  backgroundColor: "#fffff6",
                  borderRadius: "25px",
                  border: "1px solid blue",
                }}>
                <h3 className="text-capitalize">insert email list</h3>
                <form
                  action="your-upload-handler.php"
                  method="post"
                  enctype="multipart/form-data">
                  <p for="excel-file" className="pt-4">
                    Choose an Excel file to upload voters email list
                  </p>
                  <input
                    className="bg-light input-style-2"
                    type="file"
                    id="excel-file"
                    name="excel-file"
                  />
                  <br />
                  <input type="submit" value="Upload File" className="btn-1" />
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

export default inviteVoters;
