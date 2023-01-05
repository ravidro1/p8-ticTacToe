import React, {useContext, useEffect, useState} from "react";
import {Context} from "../App";
import "./gameOverPage.css";
import {useForm} from "react-hook-form";
import {NavLink} from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function GameOverPage(props) {
  const {
    currentGameData,
    setCurrentGameData,
    navigate,
    tabelScoreData,
    setTabelScoreData,
  } = useContext(Context);

  const [isThePlayerUpdate, setIsThePlayerUpdate] = useState(false);

  const {
    reset,
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  useEffect(() => {
    async function initTime() {
      const tempDate = new Date();
      const time =
        tempDate.getDate() +
        "." +
        (tempDate.getMonth() + 1) +
        "." +
        tempDate.getFullYear() +
        " - " +
        tempDate.getHours() +
        ":" +
        tempDate.getMinutes();
      await setCurrentGameData({...currentGameData, time: time});
    }

    initTime();
  }, []);

  function playersNameLoad(data) {
    // setCurrentGameData({
    //   ...currentGameData,
    //   player1: data.player1,
    //   player2: data.player2,
    // });

    const tempCurrentGameData = {
      ...currentGameData,
      player1: data.player1,
      player2: data.player2,
    };

    setTabelScoreData([tempCurrentGameData, ...tabelScoreData]);
    reset();
    navigate("/ScoreBoard");
  }

  return (
    <div className="main-gameOver-Page">
      <div className="upperSection-gameOver-Page">
        <NavLink className={"homeButtonLink-gameOver-Page"} to={"/"}>
          <div className="homeButton-gameOver-Page"> Go Back To Home </div>
        </NavLink>
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

      <form onSubmit={handleSubmit(playersNameLoad)}>
        <TextField
          //   id="1"
          className="textField-gameOver-Page"
          label="Player 1 (X)"
          variant="filled"
          {...register("player1", {required: true})}
        ></TextField>

        {/* <input type="submit" /> */}
        <Button
          type="submit"
          className="button-gameOver-Page"
          variant="contained"
        >
          {" "}
          Press For Add{" "}
        </Button>

        {currentGameData.level == "OneVsOne" && (
          <TextField
            className="textField-gameOver-Page"
            id="2"
            label="Player 2 (O)"
            variant="filled"
            {...register("player2", {required: true})}
          ></TextField>
        )}

        {currentGameData.level != "OneVsOne" && (
          <TextField
            className="textField-gameOver-Page"
            id="2"
            variant="filled"
            disabled
            value={"Computer (O)"}
            {...register("player2", {value: "Computer (O)"})}
          ></TextField>
        )}
      </form>
    </div>
  );
}

export default GameOverPage;
