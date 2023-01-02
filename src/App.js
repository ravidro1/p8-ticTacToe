import "./App.css";
import {Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import OneVsComp from "./Pages/OneVsComp";
import OneVsOne from "./Pages/OneVsOne";
import { createContext } from "react";
import Data from "./Data";

export const Context = createContext();


function App() {
  const values = Data();

  return (
    <Context.Provider value={values}>

    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/OneVsOne" element={<OneVsOne></OneVsOne>}></Route>
        <Route path="/OneVsComp" element={<OneVsComp></OneVsComp>}></Route>
      </Routes>
    </div>
    </Context.Provider>
  );
}

export default App;
