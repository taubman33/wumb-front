
import React, { useState } from "react";
import Calendar from "../assets/Calendar"; // commenting out the Calendar component in render for now



function Searchbar({ setSearchYear, setSearchMonth, setSearchDay }) {
  const [dateInput, setDateInput] = useState([]);
  // const [timeInput, setTimeInput] = useState("");
  const [ytTime, setYtTime] = useState("");

  const searchWUMB = (e) => {
    e.preventDefault();
    setSearchYear(dateInput[0].substring(2));
    setSearchMonth(dateInput[1]);
    setSearchDay(dateInput[2]);
    console.log("button works");
    console.log(`ytTime: ${ytTime}`);
    console.log(`Search Year: ${dateInput[0].substring(2)}`);
    console.log(`Search Month: ${dateInput[1]}`);
    console.log(`Search Day: ${dateInput[2]}`);
  };

  const handleTimeClick = (evt) => {
    evt.preventDefault();
    setYtTime(evt.target.value);

  };

  const handleDateClick = (e) => {
    e.preventDefault();
    const dateInput = e.target.value.split("-");
    console.log(`dateInput: ${dateInput}`);
    setDateInput(dateInput);
  };

  return (
    <div className="searchbar-container">
      <div className="controlbar">
        <span id="lookupPrompt">Chose a time and date for playlist...</span>


        {/* <div className="calendar">
        <Calendar {...{setSearchYear, setSearchMonth, setSearchDay}} />
       </div> */}

        <input type="date" label="date" onChange={handleDateClick} />
        <input
          type="time"
          label="time"
          value={ytTime}
          onChange={handleTimeClick}
        />

        <button className="search-button" onClick={searchWUMB}>
          Search WUMB Playlist
        </button>

      </div>
    </div>
  );
}

export default Searchbar;