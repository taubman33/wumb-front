import React, { useState, useEffect } from "react";
import CalendarContainer from "../assets/CalendarContainer";


function Searchbar({setSearchYear, setSearchMonth, setSearchDay}) {
  const [dateInput, setDateInput] = useState("");
  const [timeInput, setTimeInput] = useState("");
  const [minuteTime, setMinuteTime] = useState("")
  const [hourTime, setHourTime] = useState("")
  const [ytTime, setYtTime] = useState("")

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   console.log("button working");
  // };

  const handleTimeSubmit = (evt) => {
    evt.preventDefault()
    setYtTime(evt.target.value);
    console.log('searchbar', ytTime)
  };
  
  console.log(ytTime)
  console.log(ytTime.slice(3, 5))
  console.log(ytTime.slice(0, 2) )


useEffect(() => {

  const handleTimeSubmit = (evt) => {
    evt.preventDefault()
    setYtTime(evt.target.value);
    console.log('searchbar', ytTime)
  };

  setMinuteTime(ytTime.slice(3, 5))
  setHourTime(ytTime.slice(0, 2))
  console.log(hourTime, minuteTime)
}, [hourTime, minuteTime])

  
  

  return (
    <div className="searchbar-container">
      <div className="controlbar">

        <span id="lookupPrompt">Chose a time and date for playlist...</span>

        <div className="calendar">
        <CalendarContainer {...{setSearchYear, setSearchMonth, setSearchDay}} />
       </div>
        
        <input type="time"
                label="time"
                value={ytTime}
                onChange={handleTimeSubmit}/>

        {/* <button className="search-button" onClick={handleClick}>
          Search WUMB Playlist
        </button> */}
        
      </div>
    </div>
  );
}

export default Searchbar;
