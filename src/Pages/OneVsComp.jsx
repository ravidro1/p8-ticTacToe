import React, {useContext, useEffect} from "react";
import {NavLink, useParams} from "react-router-dom";
import {Context} from "../App";
import "./gamePage.css";

let movesCounter = 0;

function OneVsComp(props) {
  const {
    board,
    setBoard,
    initTempBoard,

    isWon,
    gameOver,

    reset,
    goToDefaultPage,
    currentGameData,
    setCurrentGameData,
    theBoardIsFull,
  } = useContext(Context);

  const param = useParams();

  useEffect(() => {
    reset();
    movesCounter = 0;
    if (
      param.level != "Hard" &&
      param.level != "Medium" &&
      param.level != "Easy"
    ) {
      goToDefaultPage();
    }
    setCurrentGameData({...currentGameData, level: param.level});
  }, []);

  function findTheOtherBlockInLine(
    theBoard,
    index_row,
    index_coulom,
    thisBlockContent,
    firstOtherBlocksContent,
    secondOtherBlocksContent,
    isRow
  ) {
    const twoOtherBlockLocationArray = [];

    const index = isRow ? index_coulom : index_row;

    if (index == 0) {
      twoOtherBlockLocationArray[0] = 1;
      twoOtherBlockLocationArray[1] = 2;
    }
    if (index == 1) {
      twoOtherBlockLocationArray[0] = 0;
      twoOtherBlockLocationArray[1] = 2;
    }
    if (index == 2) {
      twoOtherBlockLocationArray[0] = 0;
      twoOtherBlockLocationArray[1] = 1;
    }

    if (theBoard[index_row][index_coulom] == thisBlockContent) {
      if (!isRow) {
        if (
          (theBoard[twoOtherBlockLocationArray[0]][index_coulom] ==
            firstOtherBlocksContent &&
            theBoard[twoOtherBlockLocationArray[1]][index_coulom] ==
              secondOtherBlocksContent) ||
          (theBoard[twoOtherBlockLocationArray[1]][index_coulom] ==
            firstOtherBlocksContent &&
            theBoard[twoOtherBlockLocationArray[0]][index_coulom] ==
              secondOtherBlocksContent) ||
          (theBoard[twoOtherBlockLocationArray[1]][index_coulom] ==
            firstOtherBlocksContent &&
            theBoard[twoOtherBlockLocationArray[0]][index_coulom] ==
              firstOtherBlocksContent &&
            firstOtherBlocksContent == secondOtherBlocksContent)
        ) {
          return true;
        }
      } else if (isRow) {
        if (
          (theBoard[index_row][twoOtherBlockLocationArray[0]] ==
            firstOtherBlocksContent &&
            theBoard[index_row][twoOtherBlockLocationArray[1]] ==
              secondOtherBlocksContent) ||
          (theBoard[index_row][twoOtherBlockLocationArray[0]] ==
            secondOtherBlocksContent &&
            theBoard[index_row][twoOtherBlockLocationArray[1]] ==
              firstOtherBlocksContent) ||
          (theBoard[index_row][twoOtherBlockLocationArray[0]] ==
            firstOtherBlocksContent &&
            theBoard[index_row][twoOtherBlockLocationArray[1]] ==
              firstOtherBlocksContent &&
            firstOtherBlocksContent == secondOtherBlocksContent)
        ) {
          return true;
        }
      }
    }

    return false;
  }

  function findTheOtherBlockInSlant(
    theBoard,
    index_row,
    index_coulom,
    thisBlockContent,
    firstOtherBlocksContent,
    secondOtherBlocksContent,
    isDiractionIsLTR
  ) {
    const twoOtherBlockLocationArray = [];

    if (isDiractionIsLTR) {
      if (index_row == index_coulom) {
        if (index_row == 0 && index_coulom == 0) {
          twoOtherBlockLocationArray[0] = 1;
          twoOtherBlockLocationArray[1] = 1;
          twoOtherBlockLocationArray[2] = 2;
          twoOtherBlockLocationArray[3] = 2;
        } else if (index_row == 1 && index_coulom == 1) {
          twoOtherBlockLocationArray[0] = 0;
          twoOtherBlockLocationArray[1] = 0;
          twoOtherBlockLocationArray[2] = 2;
          twoOtherBlockLocationArray[3] = 2;
        } else if (index_row == 2 && index_coulom == 2) {
          twoOtherBlockLocationArray[0] = 0;
          twoOtherBlockLocationArray[1] = 0;
          twoOtherBlockLocationArray[2] = 1;
          twoOtherBlockLocationArray[3] = 1;
        }
      } else {
        return false;
      }
    } else if (!isDiractionIsLTR) {
      if (index_row == 0 && index_coulom == 2) {
        twoOtherBlockLocationArray[0] = 1;
        twoOtherBlockLocationArray[1] = 1;
        twoOtherBlockLocationArray[2] = 2;
        twoOtherBlockLocationArray[3] = 0;
      } else if (index_row == 1 && index_coulom == 1) {
        twoOtherBlockLocationArray[0] = 0;
        twoOtherBlockLocationArray[1] = 2;
        twoOtherBlockLocationArray[2] = 2;
        twoOtherBlockLocationArray[3] = 0;
      } else if (index_row == 2 && index_coulom == 0) {
        twoOtherBlockLocationArray[0] = 1;
        twoOtherBlockLocationArray[1] = 1;
        twoOtherBlockLocationArray[2] = 0;
        twoOtherBlockLocationArray[3] = 2;
      } else {
        return false;
      }
    }

    if (theBoard[index_row][index_coulom] == thisBlockContent) {
      if (
        (theBoard[twoOtherBlockLocationArray[0]][
          twoOtherBlockLocationArray[1]
        ] == firstOtherBlocksContent &&
          theBoard[twoOtherBlockLocationArray[2]][
            twoOtherBlockLocationArray[3]
          ] == secondOtherBlocksContent) ||
        (theBoard[twoOtherBlockLocationArray[0]][
          twoOtherBlockLocationArray[1]
        ] == secondOtherBlocksContent &&
          theBoard[twoOtherBlockLocationArray[2]][
            twoOtherBlockLocationArray[3]
          ] == firstOtherBlocksContent) ||
        (theBoard[twoOtherBlockLocationArray[0]][
          twoOtherBlockLocationArray[1]
        ] == secondOtherBlocksContent &&
          theBoard[twoOtherBlockLocationArray[2]][
            twoOtherBlockLocationArray[3]
          ] == secondOtherBlocksContent &&
          firstOtherBlocksContent == secondOtherBlocksContent)
      ) {
        return true;
      }
    }
    return false;
  }

  function mustToBlock(theBoard) {
    for (let i = 0; i < theBoard.length; i++) {
      for (let j = 0; j < theBoard[i].length; j++) {
        if (findTheOtherBlockInLine(theBoard, i, j, "", "X", "X", true)) {
          return [i, j];
        }
        if (findTheOtherBlockInLine(theBoard, i, j, "", "X", "X", false)) {
          return [i, j];
        }
        if (findTheOtherBlockInSlant(theBoard, i, j, "", "X", "X", true)) {
          return [i, j];
        }
        if (findTheOtherBlockInSlant(theBoard, i, j, "", "X", "X", false)) {
          return [i, j];
        }
      }
    }

    return false;
  }

  function bestLocationChack(theBoard) {
    const bestLocationByScore = [[], [], []];

    for (let i = 0; i < theBoard.length; i++) {
      for (let j = 0; j < theBoard[i].length; j++) {
        bestLocationByScore[i][j] = -1;

        if (theBoard[i][j] == "") bestLocationByScore[i][j]++;

        if (findTheOtherBlockInLine(theBoard, i, j, "", "", "", true)) {
          bestLocationByScore[i][j] += 1000;
        }
        if (findTheOtherBlockInLine(theBoard, i, j, "", "", "", false)) {
          bestLocationByScore[i][j] += 1000;
        }

        if (findTheOtherBlockInLine(theBoard, i, j, "", "", "O", true)) {
          bestLocationByScore[i][j] += 10000;
        }
        if (findTheOtherBlockInLine(theBoard, i, j, "", "", "O", false)) {
          bestLocationByScore[i][j] += 10000;
        }

        if (findTheOtherBlockInLine(theBoard, i, j, "", "O", "O", true)) {
          bestLocationByScore[i][j] += 100000;
        }
        if (findTheOtherBlockInLine(theBoard, i, j, "", "O", "O", false)) {
          bestLocationByScore[i][j] += 100000;
        }

        if (findTheOtherBlockInSlant(theBoard, i, j, "", "", "", true)) {
          bestLocationByScore[i][j] += 1000;
        }
        if (findTheOtherBlockInSlant(theBoard, i, j, "", "", "", false)) {
          bestLocationByScore[i][j] += 1000;
        }

        if (findTheOtherBlockInSlant(theBoard, i, j, "", "", "O", true)) {
          bestLocationByScore[i][j] += 10000;
        }
        if (findTheOtherBlockInSlant(theBoard, i, j, "", "", "O", false)) {
          bestLocationByScore[i][j] += 10000;
        }

        if (findTheOtherBlockInSlant(theBoard, i, j, "", "O", "O", true)) {
          bestLocationByScore[i][j] += 100000;
        }
        if (findTheOtherBlockInSlant(theBoard, i, j, "", "O", "O", false)) {
          bestLocationByScore[i][j] += 100000;
        }
      }
    }

    return bestLocationByScore;
  }

  function userTurn(tempBoard, index_row, index_block) {
    tempBoard[index_row][index_block] = "X";
  }

  function computerTurn(tempBoard) {
    const scoreMappedArray = bestLocationChack(tempBoard);
    const bestScoreLocation = [0, -1, -1];
    const draft = [-1, -1, -1];

    for (let c1 = 0; c1 < scoreMappedArray.length; c1++) {
      for (let c2 = 0; c2 < scoreMappedArray[c1].length; c2++) {
        if (scoreMappedArray[c1][c2] > draft[0]) {
          draft[2] = draft[1];
          draft[1] = draft[0];
          draft[0] = scoreMappedArray[c1][c2];

          console.log(draft);
        }
      }
    }

    if (draft[1] < 0) draft[1] = draft[0];
    if (draft[2] < 0) draft[2] = draft[1];

    console.log(draft);

    console.log(scoreMappedArray);
    for (let i = 0; i < scoreMappedArray.length; i++) {
      for (let j = 0; j < scoreMappedArray[i].length; j++) {
        
        if (scoreMappedArray[i][j] >= 100000) {
          bestScoreLocation[0] = scoreMappedArray[i][j];
          bestScoreLocation[1] = i;
          bestScoreLocation[2] = j;
        } else if (param.level == "Easy") {
          if (
            scoreMappedArray[i][j] >= bestScoreLocation[0] &&
            scoreMappedArray[i][j] <= draft[2]
          ) {
            bestScoreLocation[0] = scoreMappedArray[i][j];
            bestScoreLocation[1] = i;
            bestScoreLocation[2] = j;
          }
        } else if (param.level == "Medium") {
          if (
            scoreMappedArray[i][j] >= bestScoreLocation[0] &&
            scoreMappedArray[i][j] <= draft[1]
          ) {
            bestScoreLocation[0] = scoreMappedArray[i][j];
            bestScoreLocation[1] = i;
            bestScoreLocation[2] = j;
          }
        } else if (param.level == "Hard") {
          if (scoreMappedArray[i][j] >= bestScoreLocation[0]) {
            bestScoreLocation[0] = scoreMappedArray[i][j];
            bestScoreLocation[1] = i;
            bestScoreLocation[2] = j;
          }
        }
      }
    }

    console.log(scoreMappedArray);

    if (bestScoreLocation[0] >= 100000) {
      tempBoard[bestScoreLocation[1]][bestScoreLocation[2]] = "O";
    } else if (mustToBlock(tempBoard)) {
      const tempMustToBlock = mustToBlock(tempBoard);
      tempBoard[tempMustToBlock[0]][tempMustToBlock[1]] = "O";
    } else if (bestScoreLocation[1] > -1 && bestScoreLocation[2] > -1) {
      tempBoard[bestScoreLocation[1]][bestScoreLocation[2]] = "O";
    } else {
      console.log("Tie");
    }
    return tempBoard;
  }

  function setBlock(index_row, index_block) {
    let tempBoard = initTempBoard(board);

    if (tempBoard[index_row][index_block] == "") {
      movesCounter++;

      userTurn(tempBoard, index_row, index_block);

      if (isWon(tempBoard)) {
        gameOver(movesCounter, "X");
      } else {
        computerTurn(tempBoard);

        if (isWon(tempBoard)) {
          gameOver(movesCounter, "O");
        } else if (theBoardIsFull(tempBoard)) {
          gameOver("this is tie", "Tie");
        }
        setBoard(tempBoard);
      }
    } else {
      alert("this block is already taken");
    }
  }

  return (
    <div className="main-gamePage">
      <div className="upperSection-gamePage">
        <NavLink className={"homeButtonLink-gamePage"} to={"/"}>
          {" "}
          <div className="homeButton-gamePage gamePage-buttons">
            {" "}
            Go Back To Home{" "}
          </div>{" "}
        </NavLink>
      </div>

      <p className="HeadLine-gamePage">
        {" "}
        <strong> 1 vs Computer </strong>{" "}
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

export default OneVsComp;
