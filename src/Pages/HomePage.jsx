import React from "react";
import {NavLink} from "react-router-dom";
import "./homePage.css";


function HomePage(props) {

  return (
    <div className="main-homePage">
      <div>
        {" "}
        <NavLink to={"/OneVsOne"}> 1 vs 1 </NavLink>
      </div>
      <div>
        {" "}
        <NavLink to={"/OneVsComp"}> 1 vs computer </NavLink>
      </div>
    </div>
  );
}

export default HomePage;
