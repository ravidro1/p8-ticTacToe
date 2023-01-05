import React, {useContext, useEffect, useState} from "react";
import {Context} from "../App";
import "./scoreTabel.css";
import {DataGrid} from "@mui/x-data-grid";
import {NavLink} from "react-router-dom";

function ScoreTabel(props) {
  const {
    currentGameData,
    setCurrentGameData,
    navigate,
    tabelScoreData,
    setTabelScoreData,
    setIsreset
  } = useContext(Context);

  const [headr, setHeadr] = useState([]);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    // console.log(tabelScoreData[0]?.player1);

    let tempHeader = [{field: "id", headerName: "ID"}];
    tempHeader = tempHeader.concat(
      Object.keys(currentGameData)?.map((item, index) => {
        return {field: item, headerName: item, width: 125};
      })
    );

    tempHeader[tempHeader.length - 1].width = 150;
    // console.log(headr);

    let tempRows = [];

    for (let i = 0; i < tabelScoreData.length; i++) {
      let tempLine = {id: i+1};
      //    tempLine["id"] = i;

      for (let j = 1; j < tempHeader.length; j++) {
        tempLine[tempHeader[j].field] = tabelScoreData[i][tempHeader[j].field];
        // console.log(tempLine);
      }

      tempRows[i] = tempLine;
    }

    console.log(rows);
    console.log(tempHeader);

    setHeadr(tempHeader);
    setRows(tempRows);
  }, [tabelScoreData]);

  function resetList(){
    setTabelScoreData([]);
    setIsreset(true);
  }

  return (
    <div className="all-ScoreTabel-Page">
      {/* {console.log(tabelScoreData)} */}
      <div className="main-scoreTabel-page">
        <div className="upperSection-ScoreTabel-Page">
          <NavLink className={"homeButtonLink-ScoreTabel-Page"} to={"/"}>
            <div className="homeButton-ScoreTabel-Page"> Go Back To Home </div>
          </NavLink>
          <div onClick={resetList} className="clearListButton-ScoreTabel-Page"> Clear List </div>
        </div>

        <div className="headLine-scoreTabel-page"> Score Tabel </div>
        <div
          style={{
            backgroundColor: "rgb(31, 137, 169)",
            height: "70%",
            width: "90%",
          }}
        >
          <DataGrid
            sx={{color: "white", fontFamily: "Roboto Mono, monospace"}}
            rows={rows}
            columns={headr}
            pageSize={5}
            autoPageSize
            hideFooter={false}
            rowsPerPageOptions={[5]}
          />
        </div>
      </div>
    </div>
  );
}

export default ScoreTabel;
