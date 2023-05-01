import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import SecondNavBar from "./secondnavbar";
import Footer from "./footer";
import Popup from "../popups/popup-list";

function EventGeneral() {
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
      <div className="bg-common">
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h5 htmlFor="ordered-list-input margin-reverse">
            Add Rules & Regulations of the Election
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
          <Link>
            <button className="btn-2 px-5 text-center" onClick={handleClick}>
              Add
            </button>
          </Link>
        </Popup>
        <div className="container py-5">
          <div className="text-center">
            <h2 className="text-capitalize">President Election</h2>

            <h4 className="text-capitalize mt-2">Rotaract Club</h4>
          </div>
          <div
            className="my-4"
            style={{ backgroundColor: "navy", height: "2px" }}
          />
          <div className="mt-5">
            <h3>Rule & Regulations</h3>
            <p className="mt-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium assumenda quidem officia ipsa delectus saepe
              consequuntur dolorem nesciunt nam voluptatibus!
            </p>
            <button
              onClick={(e) => {
                e.preventDefault();
                setButtonPopup(true);
              }}
              className="mx-auto btn-1 px-5 mt-4">
              Add Rules & Regulations
            </button>
            <ol className="fw-semibold  py-5">
              <li>
                <div className="mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                  quisquam.
                </div>
              </li>
              <li>
                <div className="mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                  quisquam.
                </div>
              </li>
              <li>
                <div className="mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                  quisquam.
                </div>
              </li>
              <li>
                <div className="mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                  quisquam.
                </div>
              </li>
              <li>
                <div className="mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                  quisquam.
                </div>
              </li>
            </ol>
            <div
              className="my-4"
              style={{ backgroundColor: "gray", height: "1px" }}
            />
          </div>
          <p className="mt-5 text-center p-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            laboriosam ratione quam repellendus ducimus aspernatur iste,
            asperiores, at saepe nostrum numquam velit repellat facilis? Facere,
            sapiente quas quod ducimus voluptate dolorem exercitationem nam,
            quia laudantium dolores voluptatibus tenetur repellendus soluta.
          </p>
          <div className="d-flex justify-content-between gap-5 my-5">
            <div className="m-auto box-bg text-white text-center p-5">
              <h4 className="p-3">Invite Candidates</h4>
              <p className="fs-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                laboriosam ratione quam repellendus{" "}
              </p>
              <Link to="/invitecadidate">
                <button className="btn-2 my-5">Invite Candidates</button>
              </Link>
            </div>
            <div className="m-auto box-bg text-white text-center p-5">
              <h4 className="p-3">Invite Voters</h4>
              <p className="fs-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                laboriosam ratione quam repellendus{" "}
              </p>
              <Link to="/invite-voters">
                <button className="btn-2 my-5 px-5">Invite Voters</button>
              </Link>
            </div>
            <dic className="m-auto box-bg text-white text-center p-5">
              <h4 className="p-3">See Election Results</h4>
              <p className="fs-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                laboriosam ratione quam repellendus{" "}
              </p>
              <Link to="/dashboard">
                <button className="btn-2 my-5 px-5">See Results</button>
              </Link>
            </dic>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EventGeneral;
