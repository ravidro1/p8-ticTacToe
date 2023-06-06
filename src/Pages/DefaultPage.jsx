import React from "react";
import { useNavigate } from "react-router-dom";
import "./defaultPage.css";

function DefaultPage(props) {
  const navigate = useNavigate();

  return (
    <div className="main-defaultPage">
      <h1 className="errorLine-defaultPage"> 404 The Page Not Found </h1>
      <button
        onClick={() => navigate("/")}
        className="homeButton-defaultPage homeButtonLink-defaultPage"
      >
        {" "}
        Go Back To Home{" "}
      </button>{" "}
    </div>
  );
}

export default DefaultPage;
