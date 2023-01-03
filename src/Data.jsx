import React, { useState } from 'react';

function Data(props) {
   
    const pattern = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ];

    const [theCurrentPlayer, setTheCurrentPlayer] = useState("X");
    const [board, setBoard] = useState(pattern);
    const [userClickOnVsComp, setUserClickOnVsComp] = useState(false);
    
    const [movesCounter, setMovesCounter] = useState(0);

  
    function isWon(tempBoard) {
  
      for(let i=0;i<tempBoard.length;i++){
          if(tempBoard[i][0] == tempBoard[i][1] && tempBoard[i][0] == tempBoard[i][2] && tempBoard[i][0] != "") return true;
          if(tempBoard[0][i] == tempBoard[1][i] && tempBoard[0][i] == tempBoard[2][i]  && tempBoard[0][i] != "") return true;
      }
  
      if(tempBoard[0][0] == tempBoard[1][1] && tempBoard[0][0] == tempBoard[2][2]  && tempBoard[0][0] != "") return true;
      if(tempBoard[0][2] == tempBoard[1][1] && tempBoard[0][2] == tempBoard[2][0]  && tempBoard[2][0] != "") return true;
  
  
      return false;
    }
  
    function changePlayer() {
      theCurrentPlayer == "X"
        ? setTheCurrentPlayer("O")
        : setTheCurrentPlayer("X");
    }

    
  function initTempBoard(board){
    const tempBoard = [[], [], []];

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) tempBoard[i][j] = board[i][j];
    }



    return tempBoard;
  }

  function reset(){
    setBoard(pattern);
    setTheCurrentPlayer("X");
    setUserClickOnVsComp(false);
    
    setMovesCounter(0);
}

    return {
        theCurrentPlayer, setTheCurrentPlayer,board, setBoard, changePlayer, isWon, initTempBoard, reset, userClickOnVsComp, setUserClickOnVsComp
    }
}

export default Data;