import React from "react";
import "./scoreTable.css";

export default function ScoreTable({ header, data }) {
  return (
    <main className="table-container-ScoreTable-Component">
      <table className="main-ScoreTable-Component">
        <thead>
          <tr>
            {header?.map((item, index) => {
              return (
                <th className="titles-ScoreTable-Component" key={index}>
                  <div className="titles-content-div-ScoreTable-Component">
                    <p className="titles-content-p-ScoreTable-Component">
                      {item.headerName}
                    </p>
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => {
            return (
              <tr className="body-row-ScoreTable-Component" key={index}>
                {Object.values(item).map((element, internal_index) => {
                  return (
                    <td key={internal_index}>
                      {element != null && element != "" ? element : "-"}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}
