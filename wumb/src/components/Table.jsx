import React, { useState, useEffect } from "react";

function Table({ radioData, searchDay, searchMonth, searchYear }) {
  const [displayDay, setdisplayDay] = useState("");
  const [displayMonth, setdisplayMonth] = useState("");
  const [displayYear, setdisplayYear] = useState("");
  const [displayData, setdisplayData] = useState("");
  const [num0, setNum0] = useState(0);
  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(2);
  const [num3, setNum3] = useState(3);
  const [num4, setNum4] = useState(4);
  const [num5, setNum5] = useState(5);
  const [num6, setNum6] = useState(6);
  const [num7, setNum7] = useState(7);
  const [num8, setNum8] = useState(8);
  const [num9, setNum9] = useState(9);

  useEffect(() => {
    setdisplayDay(searchDay);
    setdisplayMonth(searchMonth);
    setdisplayYear(searchYear);
    setdisplayData(radioData);
  }, [searchYear, searchMonth, searchDay, radioData]);

  const nextBatch = () => {
    console.log("first", num0, num1, num2);
    setNum0(num0 + 10);
    setNum1(num1 + 10);
    setNum2(num2 + 10);
    setNum3(num3 + 10);
    setNum4(num4 + 10);
    setNum5(num5 + 10);
    setNum6(num6 + 10);
    setNum7(num7 + 10);
    setNum8(num8 + 10);
    setNum9(num9 + 10);
    console.log("second", num0, num1, num2);
  };

  const prevBatch = () => {
    if (num0 < 10) {
      alert("Too far, go to next day!");
    } else {
      console.log("first", num0, num1, num2);
      setNum0(num0 - 10);
      setNum1(num1 - 10);
      setNum2(num2 - 10);
      setNum3(num3 - 10);
      setNum4(num4 - 10);
      setNum5(num5 - 10);
      setNum6(num6 - 10);
      setNum7(num7 - 10);
      setNum8(num8 - 10);
      setNum9(num9 - 10);
      console.log("second", num0, num1, num2);
    }
  };

  if (radioData.length && searchDay && searchMonth) {
    return (
      <div className="table-container">
        <div className="table">
          <h2>
            {" "}
            {searchMonth}/{searchDay}/20{searchYear}, {radioData[num9].time} -{" "}
            {radioData[num0].time}{" "}
          </h2>

          <table>
            <thead>
              <tr className="table-header">
                <th>Time</th>
                <th>Artist</th>
                <th>Title</th>
              </tr>
            </thead>

            <tbody>
              <tr className="row selected">
                <td>{radioData[num0].time}</td>
                <td>{radioData[num0].artist}</td>
                <td>{radioData[num0].title}</td>
              </tr>

              <tr className="row">
                <td>{radioData[num1].time}</td>
                <td>{radioData[num1].artist}</td>
                <td>{radioData[num1].title}</td>
              </tr>

              <tr className="row">
                <td>{radioData[num2].time}</td>
                <td>{radioData[num2].artist}</td>
                <td>{radioData[num2].title}</td>
              </tr>

              <tr className="row">
                <td>{radioData[num3].time}</td>
                <td>{radioData[num3].artist}t</td>
                <td>{radioData[num3].title}</td>
              </tr>

              <tr className="row">
                <td>{radioData[num4].time}</td>
                <td>{radioData[num4].artist}</td>
                <td>{radioData[num4].title}</td>
              </tr>

              <tr className="row">
                <td>{radioData[num5].time}</td>
                <td>{radioData[num5].artist}</td>
                <td>{radioData[num5].title}</td>
              </tr>

              <tr className="row">
                <td>{radioData[num6].time}</td>
                <td>{radioData[num6].artist}</td>
                <td>{radioData[num6].title}</td>
              </tr>

              <tr className="row">
                <td>{radioData[num7].time}</td>
                <td>{radioData[num7].artist}</td>
                <td>{radioData[num7].title}</td>
              </tr>

              <tr className="row">
                <td>{radioData[num8].time}</td>
                <td>{radioData[num8].artist}</td>
                <td>{radioData[num8].title}</td>
              </tr>

              <tr className="row">
                <td>{radioData[num9].time}</td>
                <td>{radioData[num9].artist}</td>
                <td>{radioData[num9].title}</td>
              </tr>
            </tbody>
          </table>

          <div className="buttons">
            <button onClick={nextBatch} class="menu-button" id="next-button">
              Click for earlier batch of songs!
            </button>

            <button
              onClick={prevBatch}
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
