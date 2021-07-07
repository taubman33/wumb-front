import React, { useState } from "react";
import Calendar from "../assets/Calendar";


function Searchbar(props) {
  const [dateInput, setDateInput] = useState("");
  const [timeInput, setTimeInput] = useState("");
  const [ytTime, setYtTime] = useState("")

  const handleClick = (e) => {
    e.preventDefault();
    console.log("button working");
  };

  const handleTimeSubmit = (evt) => {
    evt.preventDefault()
    setYtTime(evt.target.value);
    console.log(ytTime)
  };
  
  // console.log(ytTime)
  
  

  return (
    <div className="searchbar-container">
      <div className="controlbar">

        <span id="lookupPrompt">Chose a time and date for playlist...</span>

        <div className="calendar">
        <Calendar/>
       </div>
        
        <input type="time"
                label="time"
                value={ytTime}
                onChange={handleTimeSubmit}/>

        <button className="search-button" onClick={handleClick}>
          Search WUMB Playlist
        </button>
        
      </div>
    </div>
  );
}

export default Searchbar;
