import React, { useState, useEffect } from "react";

function Table({ radioData, searchDay, searchMonth, searchYear }) {
  const [startRange, setStartRange] = useState(0);
  const [endRange, setEndRange] = useState(10);
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    const radioDataToDisplay = [];
    for (let i = startRange; i < endRange; i++) {
      if (!radioData[i]) break;
      radioDataToDisplay.push(radioData[i]);
    }
    setDisplayData(radioDataToDisplay);
  }, [startRange, endRange, radioData]);

  const prevBatch = () => {
    // needs an if statement to avoid an error at the end of the list
    setStartRange(startRange + 10);
    setEndRange(endRange + 10);
  };

  const nextBatch = () => {
    if (startRange < 10) {
      alert("Too far, go to next day!");
    } else {
      setStartRange(startRange - 10);
      setEndRange(endRange - 10);
    }
  };

  const tableRows = displayData.map((song) => {
    return (
      <tr key={song.time} className="row">
        <td>{song.time}</td>
        <td>{song.artist}</td>
        <td>{song.title}</td>
      </tr>
    );
  });

  if (displayData.length && searchDay && searchMonth) {
    return (
      <div className="table-container">
        <div className="table">
          <h2>
            {searchMonth}/{searchDay}/20{searchYear},{" "}
            {displayData[displayData.length - 1].time} - {displayData[0].time}
          </h2>

          <table>
            <thead>
              <tr className="table-header">
                <th>Time</th>
                <th>Artist</th>
                <th>Title</th>
              </tr>
            </thead>

            <tbody>{tableRows}</tbody>
          </table>

          <div className="buttons">
            <button onClick={prevBatch} class="menu-button" id="next-button">
              Click for earlier batch of songs!
            </button>

            <button
              onClick={nextBatch}
              className="menu-button"
              id="prev-button"
            >
              Click for later batch of songs!
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Loading, Please Wait!!</div>;
  }
}

export default Table;
