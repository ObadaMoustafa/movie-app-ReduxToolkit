import React from "react";
import notFoundImg from "../../images/NOTFOUND.png";
import "./pageNotFound.css";
function PageNotFound() {
  //write code here

  return (
    <div className="page-content">
      <img src={notFoundImg} alt="not found page" className="not-found-img" />
    </div>
  );
}

export default PageNotFound;
