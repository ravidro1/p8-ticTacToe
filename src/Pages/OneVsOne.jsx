import React, {useContext, useEffect, useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {Context} from "../App";
import "./gamePage.css";

let movesCounter = 0;
let currentPlayer = "X";

function OneVsOne(props) {
  const {
    board,
    setBoard,
    isWon,
    initTempBoard,
    reset,
    gameOver,
    currentGameData,
    setCurrentGameData,
    changePlayer,
    theBoardIsFull,
  } = useContext(Context);

  ///////////////// reset and init all data ///////////////////////
  useEffect(() => {
    reset();
    movesCounter = 0;
    currentPlayer = "X";
    setCurrentGameData({...currentGameData, level: "OneVsOne"});
  }, []);

  function setBlock(index_row, index_block) {
    const tempBoard = initTempBoard(board);

    if (tempBoard[index_row][index_block] == "") {
      if (currentPlayer == "X") {
        movesCounter++;
      }

      tempBoard[index_row][index_block] = currentPlayer;
      setBoard(tempBoard);

      if (isWon(tempBoard)) {
        gameOver(movesCounter, currentPlayer);
      } else if (theBoardIsFull(tempBoard)) {
        gameOver("this is tie", "Tie");
      } else {
        currentPlayer = changePlayer(currentPlayer);
      }
    } else {
      alert("this block is already taken");
    }

    // console.log(currentGameData);
    // console.log(movesCounter);
  }

  return (
    <div className="main-gamePage">
      <div className="upperSection-gamePage">
        
        <NavLink className={"homeButtonLink-gamePage"} to={"/"}>
          <div className="homeButton-gamePage gamePage-buttons"> Go Back To Home </div>
        </NavLink>

        <div className="countMoveShow-gamePage gamePage-buttons">
          {" "}
          Turn is of {currentPlayer}{" "}
        </div>
      </div>

      <p className="HeadLine-gamePage">
        <strong> 1 vs 1 </strong>
      </p>
      <div id="board">
        {board.map((row, index_row) => (
          <div key={index_row} className="rows" id={`row${index_row}`}>
            {board[index_row].map((item, index_block) => (
              <div
                key={index_block}
                className="block"
                onClick={() => setBlock(index_row, index_block)}
              >
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default OneVsOne;
