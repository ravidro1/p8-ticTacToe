import React, {useContext, useEffect} from "react";
import {Context} from "../App";

function OneVsComp(props) {
  const {
    theCurrentPlayer,
    setTheCurrentPlayer,
    board,
    setBoard,
    changePlayer,
    isWon,
    initTempBoard,
    reset,
  } = useContext(Context);

  useEffect(() => {
    reset();
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

    if (index_row == 0 && index_coulom == 1) {
      // console.log(index);
      // console.log(twoOtherBlockLocationArray);
    }

    // if(index_row == 0 && index_coulom == 1){
    //     console.log(twoOtherBlockLocationArray);
    // }

    //  ||theBoard[index_row][twoOtherBlockLocationArray[0]] == theBoard[index_row][twoOtherBlockLocationArray[1]] &&  theBoard[index_row][twoOtherBlockLocationArray[1]] == firstOtherBlocksContent ||
    // theBoard[index_row][twoOtherBlockLocationArray[0]] == theBoard[index_row][twoOtherBlockLocationArray[1]] &&  theBoard[index_row][twoOtherBlockLocationArray[1]] == secondOtherBlocksContent

    if (theBoard[index_row][index_coulom] == thisBlockContent) {
      if (!isRow) {
        if (index_row == 0 && index_coulom == 1) {
          //   console.log("[" + firstOtherBlocksContent + "]   " + "[" + secondOtherBlocksContent + "]   " + index_coulom + "  " + isRow + "  " + index, twoOtherBlockLocationArray);
          // console.log(theBoard[twoOtherBlockLocationArray[0][index_coulom]]);
          // console.log(theBoard[twoOtherBlockLocationArray[0]][index_coulom]);
        }

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

          //       ||
          //   (theBoard[twoOtherBlockLocationArray[1][index_coulom]] ==
          //     secondOtherBlocksContent &&
          //     theBoard[twoOtherBlockLocationArray[0][index_coulom]] ==
          //       secondOtherBlocksContent)
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
          //        ||
          //   (theBoard[index_row][twoOtherBlockLocationArray[1]] ==
          //     secondOtherBlocksContent &&
          //     theBoard[index_row][twoOtherBlockLocationArray[0]] ==
          //       secondOtherBlocksContent)
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

        //   ||
        // (theBoard[twoOtherBlockLocationArray[0]][
        //   twoOtherBlockLocationArray[1]
        // ] == firstOtherBlocksContent &&
        //   theBoard[twoOtherBlockLocationArray[2]][
        //     twoOtherBlockLocationArray[3]
        //   ] == firstOtherBlocksContent)
      ) {
        return true;
      }
    }
    return false;
  }

  function mustToBlock(board) {
    for (let i = 0; i < board.length; i++) {
      const tempIndex = [0, 1, 2];

      //   for (let j = 0; j < board[i].length; j++) {
      for (let j = 0; j < 3; j++) {
        if (
          board[i][tempIndex[0]] == board[i][tempIndex[1]] &&
          board[i][tempIndex[0]] != board[i][tempIndex[2]] &&
          board[i][tempIndex[0]] != "" &&
          board[i][tempIndex[0]] != "O" &&
          board[i][tempIndex[2]] == ""
        ) {
          return [i, tempIndex[2]];
        }
        if (
          board[tempIndex[0]][i] == board[tempIndex[1]][i] &&
          board[tempIndex[0]][i] != board[tempIndex[2]][i] &&
          board[tempIndex[0]][i] != "" &&
          board[tempIndex[0]][i] != "O" &&
          board[tempIndex[2]][i] == ""
        ) {
          return [tempIndex[2], i];
        }

        const temp = tempIndex.pop();
        tempIndex.unshift(temp);
      }

      if (
        board[0][2] == board[1][1] &&
        board[0][2] != board[2][0] &&
        board[0][2] != "" &&
        board[0][2] != "O" &&
        board[2][0] == ""
      ) {
        return [2, 0];
      }
      if (
        board[2][0] == board[1][1] &&
        board[2][0] != board[0][2] &&
        board[2][0] != "" &&
        board[2][0] != "O" &&
        board[0][2] == ""
      ) {
        return [0, 2];
      }
      if (
        board[2][0] == board[0][2] &&
        board[2][0] != board[1][1] &&
        board[2][0] != "" &&
        board[2][0] != "O" &&
        board[1][1] == ""
      ) {
        return [1, 1];
      }
    }

    if (
      board[2][2] == board[1][1] &&
      board[2][2] != board[0][0] &&
      board[2][2] != "" &&
      board[2][2] != "O" &&
      board[0][0] == ""
    ) {
      return [0, 0];
    }
    if (
      board[0][0] == board[1][1] &&
      board[0][0] != board[2][2] &&
      board[0][0] != "" &&
      board[0][0] != "O" &&
      board[2][2] == ""
    ) {
      return [2, 2];
    }
    if (
      board[0][0] == board[2][2] &&
      board[0][0] != board[1][1] &&
      board[2][2] != "" &&
      board[2][2] != "O" &&
      board[1][1] == ""
    ) {
      return [1, 1];
    }

    return false;
  }

  function bestLocationChack(theBoard) {
    const bestLocationByScore = [[], [], []];

    for (let i = 0; i < theBoard.length; i++) {
      for (let j = 0; j < theBoard[i].length; j++) {
        bestLocationByScore[i][j] = 0;

        if (findTheOtherBlockInLine(theBoard, i, j, "", "", "", true)) {
          bestLocationByScore[i][j]++;
          //   console.log(1);
        }
        if (findTheOtherBlockInLine(theBoard, i, j, "", "", "", false)) {
          bestLocationByScore[i][j]++;
          //   console.log(2);
        }

        if (findTheOtherBlockInLine(theBoard, i, j, "", "", "O", true)) {
          bestLocationByScore[i][j] += 50;
          //   console.log(3);
        }
        if (findTheOtherBlockInLine(theBoard, i, j, "", "", "O", false)) {
          bestLocationByScore[i][j] += 50;
          //   console.log(4);
        }

        if (findTheOtherBlockInLine(theBoard, i, j, "", "O", "O", true)) {
          bestLocationByScore[i][j] += 1000;
          //   console.log(5);
        }
        if (findTheOtherBlockInLine(theBoard, i, j, "", "O", "O", false)) {
          bestLocationByScore[i][j] += 1000;
          //   console.log(6);
        }

        if (findTheOtherBlockInSlant(theBoard, i, j, "", "", "", true)) {
          bestLocationByScore[i][j]++;
          //   console.log(7);
        }
        if (findTheOtherBlockInSlant(theBoard, i, j, "", "", "", false)) {
          bestLocationByScore[i][j]++;
          //   console.log(8);
        }

        if (findTheOtherBlockInSlant(theBoard, i, j, "", "", "O", true)) {
          bestLocationByScore[i][j] += 50;
          //   console.log(9);
        }
        if (findTheOtherBlockInSlant(theBoard, i, j, "", "", "O", false)) {
          bestLocationByScore[i][j] += 50;
          //   console.log(10);
        }

        if (findTheOtherBlockInSlant(theBoard, i, j, "", "O", "O", true)) {
          bestLocationByScore[i][j] += 1000;
          //   console.log(11);
        }
        if (findTheOtherBlockInSlant(theBoard, i, j, "", "O", "O", false)) {
          bestLocationByScore[i][j] += 1000;
          //   console.log(12);
        }
      }
    }

    return bestLocationByScore;
  }

  function computerTurn(tempBoard) {
    const scoreMappedArray = bestLocationChack(tempBoard);
    const bestScoreLocation = [0, -1, -1];

    for (let i = 0; i < scoreMappedArray.length; i++) {
      for (let j = 0; j < scoreMappedArray[i].length; j++) {
        if (scoreMappedArray[i][j] > bestScoreLocation[0]) {
          bestScoreLocation[0] = scoreMappedArray[i][j];
          bestScoreLocation[1] = i;
          bestScoreLocation[2] = j;
        }
      }
    }

    return bestScoreLocation;
  }

  function setBlock(index_row, index_block) {
    const tempBoard = initTempBoard(board);
    let tempCurrentPlayer = theCurrentPlayer;

    if (tempBoard[index_row][index_block] == "") {
      tempBoard[index_row][index_block] = "X";

      if (isWon(tempBoard)) alert(tempCurrentPlayer + " won");
      
      tempCurrentPlayer = "O"

      console.log(bestLocationChack(tempBoard));
      const bestLocationArray = computerTurn(tempBoard);

      if (bestLocationArray[0] >= 1000) {
        tempBoard[bestLocationArray[1]][bestLocationArray[2]] = "O";
      } else if (mustToBlock(tempBoard)) {
        console.log(bestLocationChack(tempBoard));
        const tempMustToBlock = mustToBlock(tempBoard);
        tempBoard[tempMustToBlock[0]][tempMustToBlock[1]] = "O";
      } else if (bestLocationArray[1] > -1 && bestLocationArray[2] > -1) {
        tempBoard[bestLocationArray[1]][bestLocationArray[2]] = "O";
      } else {
        console.log("tie");
      }
    }
    setBoard(tempBoard);

    if (isWon(tempBoard)) alert(tempCurrentPlayer + " won");

    tempCurrentPlayer = "X";
  }

  return (
    <div>
      <div id="board">
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
    </div>
  );
}

export default OneVsComp;
