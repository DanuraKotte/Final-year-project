import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UserImg from "../assets/images/user2.png";

function CheckboxForm() {
  const bgColor = {
    backgroundColor: "#d3d3d3",
    opacity: "0.6",
  };
  return (
    <>
      <form className="d-flex w-25 flex-column gap-4 p-3">
        <div class="form-check form-check-inline gap-3 w-50" style={bgColor}>
          <label class="form-check-label px-3">
            <input
              class="form-check-input"
              type="checkbox"
              name="checkboxOption"
              id="option1"
              value="option1"
            />
            Option 1
          </label>
          <img
            src={UserImg}
            style={{ height: "20px", borderRadius: "30px" }}
            alt="checkbox image"
          />
        </div>
        <div class="form-check form-check-inline w-50" style={bgColor}>
          <label class="form-check-label px-3">
            <input
              class="form-check-input"
              type="checkbox"
              name="checkboxOption"
              id="option1"
              value="option1"
            />
            Option 1
          </label>
          <img src="https://via.placeholder.com/50x50" alt="checkbox image" />
        </div>
        <div class="form-check form-check-inline w-50" style={bgColor}>
          <label class="form-check-label px-3">
            <input
              class="form-check-input"
              type="checkbox"
              name="checkboxOption"
              id="option1"
              value="option1"
            />
            Option 1
          </label>
          <img src="https://via.placeholder.com/50x50" alt="checkbox image" />
        </div>
        <div class="form-check form-check-inline w-50" style={bgColor}>
          <label class="form-check-label px-3">
            <input
              class="form-check-input"
              type="checkbox"
              name="checkboxOption"
              id="option1"
              value="option1"
            />
            Option 1
          </label>
          <img src="https://via.placeholder.com/50x50" alt="checkbox image" />
        </div>
        <div class="form-check form-check-inline w-50" style={bgColor}>
          <label class="form-check-label px-3">
            <input
              class="form-check-input"
              type="checkbox"
              name="checkboxOption"
              id="option1"
              value="option1"
            />
            Option 1
          </label>
          <img src="https://via.placeholder.com/50x50" alt="checkbox image" />
        </div>
        <button type="submit" class="btn btn-primary w-25 mt-3">
          Vote
        </button>
      </form>
    </>
  );
}

export default CheckboxForm;
