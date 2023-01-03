import React, {useContext} from "react";
import {Context} from "../App";
import "./gameOverPage.css";
import {useForm} from "react-hook-form";

function GameOverPage(props) {
  const {board, currentGameData, setCurrentGameData} = useContext(Context);

  const {
    reset,
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  function onSubmit(data) {
    setCurrentGameData({
      ...currentGameData,
      player1: data.player1,
      player2: data.player2,
    });
    reset();
  }

  ////////////////////////////////////
  // date and time
  // inputs
  // name

  return (
    <div className="main-gameOver-Page">
      {console.log(currentGameData)}
      <p>Game Over Page</p>
      <p> {currentGameData.winner} won </p>
      <p> game level: {currentGameData.level}</p>
      <p> number of move: {currentGameData.movesCounter} </p>

      {currentGameData.player1 && <p> player1: {currentGameData.player1} </p>}
      {currentGameData.player2 && <p> player2: {currentGameData.player2} </p>}

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Player 1 (X)"
          type="text"
          {...register("player1")}
        />
        {/* { &&  value={currentGameData.player2}} */}

        {currentGameData.level == "OneVsOne" && (
          <input
            placeholder="Player 2 (O)"
            type="text"
            {...register("player2")}
          />
        )}

        {currentGameData.level != "OneVsOne" && (
          <input
            value={"Computer (O)"}
            placeholder="Computer (O)"
            type="text"
            {...register("player2")}
          />
        )}
        <input type="submit" />
      </form>
    </div>
  );
}

export default GameOverPage;
