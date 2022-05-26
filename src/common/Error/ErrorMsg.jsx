import React from "react";
import "./errorMsg.css";

function ErrorMsg({ text }) {
  //write code here

  return (
    <div className="error-msg">
      <p>{text}</p>
    </div>
  );
}

export default ErrorMsg;
