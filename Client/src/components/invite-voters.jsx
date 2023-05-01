import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/inputs.css";
import Popup from "../popups/popup-list";
import SecondNavBar from "./secondnavbar";
import Footer from "./footer";

function inviteVoters() {
  const [listValue, setListValue] = useState("");
  const [buttonPopup, setButtonPopup] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setButtonPopup(true);
    window.location.reload();
  };

  function numberList(event) {
    let lines = event.target.value.split("\n");

    for (let i = 0; i < lines.length; i++) {
      if (!lines[i].match(/^\d+\. /)) {
        // only add number if line doesn't start with a number
        lines[i] = i + 1 + ". " + lines[i];
      }
    }

    setListValue(lines.join("\n"));
  }
  return (
    <>
      <SecondNavBar />
      <div className="bg-common vh-100">
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h5 htmlFor="ordered-list-input margin-reverse">
            Enter emails to invite voters
          </h5>
          <textarea
            className="textarea-1 my-5 w-100 d-flex"
            id="ordered-list-input"
            name="ordered-list-input"
            rows="10"
            cols="90"
            value={listValue}
            placeholder="Enter each item on a new line"
            onChange={numberList}
            required
          />
          <Link to="#">
            <button className="btn-2 px-5 text-center" onClick={handleClick}>
              Send Invites
            </button>
          </Link>
        </Popup>
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
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setButtonPopup(true);
                  }}
                  className="mt-5 btn-1 text-capitalize w-25">
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
