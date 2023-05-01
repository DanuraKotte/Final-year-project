import React from "react";
import "../styles/popup.css";

function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <div className="text-center">{props.children}</div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
