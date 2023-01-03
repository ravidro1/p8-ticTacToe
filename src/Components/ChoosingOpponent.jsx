import React, { useContext } from "react";
import {NavLink} from "react-router-dom";
import { Context } from "../App";
import "./choosingOpponent.css";

function ChoosingOpponent(props) {

  const {setUserClickOnVsComp} = useContext(Context);

  return (
    <div className="links-div-choosingOpponent-Page">
      <NavLink
        className={"gamesLink-choosingOpponent-Page"}
        to={"/OneVsComp/Easy"}
      >
        {" "}
        <div className="gamesButtons-choosingOpponent-Page"> Easy </div>{" "}
      </NavLink>
      <NavLink
        className={"gamesLink-choosingOpponent-Page"}
        to={"/OneVsComp/Medium"}
      >
        {" "}
        <div className="gamesButtons-choosingOpponent-Page"> Medium </div>{" "}
      </NavLink>
      <NavLink
        className={"gamesLink-choosingOpponent-Page"}
        to={"/OneVsComp/Hard"}>
        {" "}
        <div className="gamesButtons-choosingOpponent-Page"> Hard </div>{" "}
      </NavLink>

        <div onClick={() => setUserClickOnVsComp(false)} className="gamesButtons-choosingOpponent-Page "> Back </div>{" "}
    </div>
  );
}

export default ChoosingOpponent;
