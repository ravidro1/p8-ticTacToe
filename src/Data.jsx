import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

function Data(props) {
  const pattern = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  const navigate = useNavigate();

  const [userClickOnVsComp, setUserClickOnVsComp] = useState(false);

  const [board, setBoard] = useState(pattern);


  const [currentGameData, setCurrentGameData] = useState({
    level: "",
    movesCounter: 0,
    winner: "",
    player1: "",
    player2: "",
  });

  const [tabelScoreData, setTabelScoreData] = useState([]);

  function isWon(tempBoard) {
    for (let i = 0; i < tempBoard.length; i++) {
      if (
        tempBoard[i][0] == tempBoard[i][1] &&
        tempBoard[i][0] == tempBoard[i][2] &&
        tempBoard[i][0] != ""
      )
        return true;
      if (
        tempBoard[0][i] == tempBoard[1][i] &&
        tempBoard[0][i] == tempBoard[2][i] &&
        tempBoard[0][i] != ""
      )
        return true;
    }

    if (
      tempBoard[0][0] == tempBoard[1][1] &&
      tempBoard[0][0] == tempBoard[2][2] &&
      tempBoard[0][0] != ""
    )
      return true;
    if (
      tempBoard[0][2] == tempBoard[1][1] &&
      tempBoard[0][2] == tempBoard[2][0] &&
      tempBoard[2][0] != ""
    )
      return true;

    return false;
  }

  function changePlayer(currentPlayer) {
    let tempCurrentPlayer = null;
    
    currentPlayer == "X"
      ? tempCurrentPlayer = "O"
      : tempCurrentPlayer = "X";

      return tempCurrentPlayer;
  }

  function initTempBoard(board) {
    const tempBoard = [[], [], []];

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) tempBoard[i][j] = board[i][j];
    }

    return tempBoard;
  }

  function reset() {
    setBoard(pattern);
    setUserClickOnVsComp(false);

    setCurrentGameData({
      level: "",
      movesCounter: 0,
      winner: "",
      player1: "",
      player2: "",
    });
  }

  function gameOver(movesCounter, winner) {
    setCurrentGameData({...currentGameData, movesCounter: movesCounter, winner: winner});
    navigate("/GameOver");
  }

  function goToDefaultPage() {
    reset();
    navigate("*");
  }

  return {
    board,
    setBoard,
    initTempBoard,

    userClickOnVsComp,
    setUserClickOnVsComp,

    isWon,
    gameOver,

    reset,
    goToDefaultPage,
    currentGameData,
    setCurrentGameData,
    changePlayer,

  };
}

export default Data;
