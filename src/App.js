import "./App.css";
import {Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import OneVsComp from "./Pages/OneVsComp";
import OneVsOne from "./Pages/OneVsOne";
import { createContext } from "react";
import Data from "./Data";
import ScoreTabel from "./Pages/ScoreTabel"
import GameOverPage from "./Pages/GameOverPage";
import DefaultPage from "./Pages/DefaultPage";

export const Context = createContext();


function App() {
  const values = Data();


  return (
    <Context.Provider value={values}>

    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/OneVsOne" element={<OneVsOne></OneVsOne>}></Route>
        <Route path="/OneVsComp/:level" element={<OneVsComp></OneVsComp>}></Route>
        <Route path="/GameOver" element={<GameOverPage></GameOverPage>}></Route>
        <Route path="/ScoreBoard" element={<ScoreTabel></ScoreTabel>}></Route>
        <Route path="*" element={<DefaultPage></DefaultPage>}></Route>
      </Routes>
    </div>
    </Context.Provider>
  );
}

export default App;
