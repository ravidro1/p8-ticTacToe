import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../App";
import ChoosingOpponent from "../Components/ChoosingOpponent";
import "./homePage.css";

function HomePage(props) {
  const { userClickOnVsComp, setUserClickOnVsComp, navigate } =
    useContext(Context);

  return (
    <div className="main-homePage">
      <p id="homePage-headLine">
        <strong> Tic Tac Toe </strong>{" "}
      </p>

      {userClickOnVsComp ? (
        <ChoosingOpponent />
      ) : (
        <div className="links-div-homePage">
          <button onClick={() => navigate("/OneVsOne")} className="gamesButton">
            {" "}
            1 vs 1{" "}
          </button>

          <button
            onClick={() => setUserClickOnVsComp(true)}
            className="gamesButton"
          >
            1 vs computer
          </button>

          <button
            onClick={() => navigate("ScoreBoard")}
            className="gamesButton"
          >
            {" "}
            Score Board{" "}
          </button>
        </div>
      )}
    </div>
  );
}

export default HomePage;
