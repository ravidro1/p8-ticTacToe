import React, {useContext, useEffect, useState} from "react";
import { Context } from "../App";
import "./gamePage.css";

function OneVsOne(props) {

  const {theCurrentPlayer, setTheCurrentPlayer,board, setBoard, changePlayer, isWon, initTempBoard, reset} = useContext(Context);


  useEffect(() => {
    reset();
  }, []);

  function setBlock(index_row, index_block) {
    const temp = initTempBoard(board);

    console.log(temp);

    if (temp[index_row][index_block] == "") {
      temp[index_row][index_block] = theCurrentPlayer;
      setBoard(temp);

      if (isWon(temp)) {
        alert(theCurrentPlayer + " Won");
      }
      changePlayer();

    } else {
      alert("this block is already taken");
    }
  }

  return (
    <div id="board">
      {console.log(board)}
      {board.map((row, index_row) => (
        <div key={index_row} className="rows" id={`row${index_row}`}>
          {board[index_row].map((item, index_block) => (
            <div
              key={index_block}
              className="block"
              onClick={() => setBlock(index_row, index_block)}
            >
              {" "}
              <p> {item}</p>
              {"   "}
              <p>
                {index_row},{index_block}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default OneVsOne;
