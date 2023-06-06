import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../App";
import "./choosingOpponent.css";

function ChoosingOpponent(props) {
  const { setUserClickOnVsComp, navigate } = useContext(Context);

  return (
    <div className="links-div-choosingOpponent-Page">
      <button
        onClick={() => navigate("/OneVsComp/Easy")}
        className="gamesButtons-choosingOpponent-Page"
      >
        {" "}
        Easy{" "}
      </button>{" "}
      <div
        onClick={() => navigate("/OneVsComp/Medium")}
        className="gamesButtons-choosingOpponent-Page"
      >
        {" "}
        Medium{" "}
      </div>{" "}
      <div
        onClick={() => navigate("/OneVsComp/Hard")}
        className="gamesButtons-choosingOpponent-Page"
      >
        {" "}
        Hard{" "}
      </div>{" "}
      <div
        onClick={() => setUserClickOnVsComp(false)}
        className="gamesButtons-choosingOpponent-Page "
      >
        {" "}
        Back{" "}
      </div>
    </div>
  );
}

export default ChoosingOpponent;
