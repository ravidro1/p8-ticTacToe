import React, { useContext, useEffect, useState } from "react";
import { Context } from "../App";
import "./scoreTablePage.css";
import ScoreTable from "../Components/ScoreTable";

function ScoreTablePage(props) {
  const {
    currentGameData,
    navigate,
    TableScoreData,
    setTableScoreData,
    setIsReset,
  } = useContext(Context);

  const [header, setHeader] = useState([]);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    let tempHeader = [{ field: "id", headerName: "ID" }];
    tempHeader = tempHeader.concat(
      Object.keys(currentGameData)?.map((item, index) => {
        return { field: item, headerName: item, width: 125 };
      })
    );

    tempHeader[tempHeader.length - 1].width = 150;

    let tempRows = [];

    for (let i = 0; i < TableScoreData.length; i++) {
      let tempLine = { id: i + 1 };

      for (let j = 1; j < tempHeader.length; j++) {
        tempLine[tempHeader[j].field] = TableScoreData[i][tempHeader[j].field];
      }

      tempRows[i] = tempLine;
    }

    setHeader(tempHeader);
    setRows(tempRows);
  }, [TableScoreData]);

  function resetList() {
    setTableScoreData([]);
    setIsReset(true);
  }

  return (
    <main className="main-scoreTable-page">
      <section className="upperSection-ScoreTable-Page">
        <button
          className="buttons-ScoreTable-Page"
          onClick={() => navigate("/")}
        >
          Go Back To Home
        </button>
        <button onClick={resetList} className="buttons-ScoreTable-Page">
          Clear List{" "}
        </button>
      </section>

      <h1 className="headLine-scoreTable-page">Score Table</h1>
      <section
        style={{
          height: "70%",
          width: "90%",
        }}
      >
        <ScoreTable data={rows} header={header} />
      </section>
    </main>
  );
}

export default ScoreTablePage;
