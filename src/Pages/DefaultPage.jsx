import React from "react";
import { NavLink } from "react-router-dom";
import "./defaultPage.css"

function DefaultPage(props) {
  return (
    <div className="main-defaultPage">
      <div className="upperSection-defaultPage">
        <NavLink className={"homeButtonLink-defaultPage"} to={"/"}>
          {" "}
          <div className="homeButton-defaultPage"> Go Back To Home </div>{" "}
        </NavLink>
      </div>
      <h1 className="errorLine-defaultPgae"> 404 The Page Not Found </h1>
    </div>
  );
}

export default DefaultPage;
