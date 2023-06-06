import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import OneVsComp from "./Pages/OneVsComp";
import OneVsOne from "./Pages/OneVsOne";
import { createContext } from "react";
import Data from "./Data";
import ScoreTablePage from "./Pages/ScoreTablePage";
import GameOverPage from "./Pages/GameOverPage";
import DefaultPage from "./Pages/DefaultPage";

export const Context = createContext();

function App() {
  const values = Data();

  return (
    <Context.Provider value={values}>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/OneVsOne" element={<OneVsOne />} />
          <Route path="/OneVsComp/:level" element={<OneVsComp />} />
          <Route path="/GameOver" element={<GameOverPage />} />
          <Route path="/ScoreBoard" element={<ScoreTablePage />} />
          <Route path="*" element={<DefaultPage />} />
        </Routes>
      </div>
    </Context.Provider>
  );
}

export default App;
