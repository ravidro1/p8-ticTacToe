import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Context } from "../App";
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
    navigate,
  } = useContext(Context);

  ///////////////// reset and init all data ///////////////////////
  useEffect(() => {
    reset();
    movesCounter = 0;
    currentPlayer = "X";
    setCurrentGameData({ ...currentGameData, level: "OneVsOne" });
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
  }

  const [blockHover, setBlockHover] = useState(false);

  return (
    <div className="main-gamePage">
      <div className="upperSection-gamePage">
        <button
          onClick={() => navigate("/")}
          className="homeButton-gamePage gamePage-buttons"
        >
          {" "}
          Go Back To Home{" "}
        </button>

        <div className="gamePage-buttons"> Turn is of {currentPlayer} </div>
      </div>

      <h1 className="HeadLine-gamePage">
        <strong> 1 vs 1 </strong>
      </h1>
      <div id="board">
        {board.map((row, index_row) => (
          <div key={index_row} className="rows" id={`row${index_row}`}>
            {board[index_row].map((item, index_block) => {
              let isHover = false;
              if (
                blockHover.index_row == index_row &&
                blockHover.index_block == index_block
              )
                isHover = true;
              return (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    color: isHover && !item ? "#00000050" : "#000",
                  }}
                  onMouseEnter={() => setBlockHover({ index_row, index_block })}
                  onMouseLeave={() =>
                    setBlockHover({ index_row: null, index_block: null })
                  }
                  key={index_block}
                  className="block"
                  onClick={() => setBlock(index_row, index_block)}
                >
                  {item ? item : isHover && currentPlayer}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default OneVsOne;
