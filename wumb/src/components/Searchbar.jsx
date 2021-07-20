import React, { useState } from "react";
// import CalendarContainer from "./CalendarContainer";

function Searchbar({ setSearchYear, setSearchMonth, setSearchDay }) {
  const [dateInput, setDateInput] = useState("");

  // TODO: Do we take away the search function completely, and have the page reload onClick of the date?
  const searchWUMB = (e) => {
    setSearchYear(dateInput[0].substring(2));
    setSearchMonth(dateInput[1]);
    setSearchDay(dateInput[2]);
  };

  const handleDateClick = (e) => {
    e.preventDefault();
    const searchDate = e.target.value.split("-");
    console.log(`searchDate: ${searchDate}`);
    setDateInput(searchDate);
  };

  return (
    <div className="searchbar-container">
      {/* <div className="calendar">
          <CalendarContainer
            {...{ setSearchYear, setSearchMonth, setSearchDay }}
          />
        </div> */}
      <label>Search historical playlists on WUMB radio</label>
      <br />
      <input type="date" label="date" onChange={handleDateClick} />
      <br />
      <button className="search-button" onClick={searchWUMB}>
        Search WUMB Playlist
      </button>
    </div>
  );
}

export default Searchbar;
