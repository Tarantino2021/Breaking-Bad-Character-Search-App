import React from "react";
import { useMyAlertContext } from "../context/Alert/alertContextProvider";

const AlertBox = ({ text }) => {
  return (
    <div className="alertBox">
      <h1 className="alertBox_text">⚠️ {text}</h1>
    </div>
  );
};

export default AlertBox;
