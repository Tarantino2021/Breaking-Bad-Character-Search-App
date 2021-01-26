import React from "react";

const AlertBox = ({ text }) => {
  return (
    <div className="alertBox">
      <h1 className="alertBox_text">⚠️ {text}</h1>
    </div>
  );
};

export default AlertBox;
