import React, { useContext, useEffect } from "react";
import { Context } from "../App";
import "./gameOverPage.css";
import { useForm } from "react-hook-form";

function GameOverPage() {
  const {
    currentGameData,
    setCurrentGameData,
    navigate,
    TableScoreData,
    setTableScoreData,
  } = useContext(Context);

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const tempDate = new Date();

    const time =
      tempDate.getDate() +
      "." +
      (tempDate.getMonth() + 1) +
      "." +
      tempDate.getFullYear() +
      " - " +
      (String(tempDate.getHours()).length > 1
        ? tempDate.getHours()
        : "0" + tempDate.getHours()) +
      ":" +
      (String(tempDate.getMinutes()).length > 1
        ? tempDate.getMinutes()
        : "0" + tempDate.getMinutes());
    setCurrentGameData({ ...currentGameData, time: time });
  }, []);

  function playersNameLoad(data) {
    const tempCurrentGameData = {
      ...currentGameData,
      player1: data.player1,
      player2: data.player2,
    };

    setTableScoreData([tempCurrentGameData, ...TableScoreData]);
    reset();
    navigate("/ScoreBoard");
  }

  return (
    <div className="main-gameOver-Page">
      <div className="upperSection-gameOver-Page">
        <button
          onClick={() => navigate("/")}
          className="homeButton-gameOver-Page homeButtonLink-gameOver-Page"
        >
          {" "}
          Go Back To Home{" "}
        </button>
      </div>

      <div className="HeadLine-gameOver-Page"> Game Over Page </div>

      <div className="dataShow-gameOver-Page">
        Winner: {currentGameData?.winner}
      </div>
      <div className="dataShow-gameOver-Page">
        {" "}
        Game Level: {currentGameData?.level}{" "}
      </div>
      <div className="dataShow-gameOver-Page">
        {" "}
        Time: {currentGameData?.time}{" "}
      </div>
      <div className="dataShow-gameOver-Page">
        {" "}
        Number Of Move: {currentGameData?.movesCounter}{" "}
      </div>

      <form
        className="form-gameOver-Page"
        onSubmit={handleSubmit(playersNameLoad)}
      >
        <input
          className="textField-gameOver-Page"
          placeholder="Player 1 (X)"
          {...register("player1", { required: true })}
        />

        <button type="submit" className="button-gameOver-Page">
          {" "}
          Press For Add{" "}
        </button>

        {currentGameData.level == "OneVsOne" && (
          <input
            className="textField-gameOver-Page"
            placeholder="player 2 (O)"
            {...register("player2", { required: true })}
          />
        )}

        {currentGameData.level != "OneVsOne" && (
          <input
            className="textField-gameOver-Page"
            disabled
            value={"Computer (O)"}
            {...register("player2")}
          />
        )}
      </form>
    </div>
  );
}

export default GameOverPage;
