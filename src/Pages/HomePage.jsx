import React, {useContext, useState} from "react";
import {NavLink} from "react-router-dom";
import { Context } from "../App";
import ChoosingOpponent from "../Components/ChoosingOpponent";
import "./homePage.css";

function HomePage(props) {


const {userClickOnVsComp, setUserClickOnVsComp} = useContext(Context);


  return (
    <div className="main-homePage">
      <p id="homePage-headLine">
        {" "}
        <strong> Tic Tac Toe </strong>{" "}
      </p>

      {!userClickOnVsComp && (
        <div className="links-div-homePage">
          {" "}
          <NavLink className={"gamesLink"} to={"/OneVsOne"}>
            <div className="gamesButton"> 1 vs 1 </div>
          </NavLink>
          <div onClick={() => setUserClickOnVsComp(true)} className="gamesButton">
            {" "}
            1 vs computer{" "}
          </div>{" "}

          <NavLink className={"gamesLink"} to={"/ScoreBoard"}>
            <div className="gamesButton"> Score Board </div>
          </NavLink>
        </div>
      )}

        {userClickOnVsComp && <ChoosingOpponent></ChoosingOpponent>}


    </div>
  );
}

export default HomePage;
