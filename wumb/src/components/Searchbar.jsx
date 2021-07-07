import React, { useState } from "react";
import Cal from "./CalContainer";


//contains calendar, search bar for date + time, am/pm button for time search, and Submit button
//unsure if we will use calendar, search bar, both, or neither! 

function Searchbar(props) {
  const [dateInput, setDateInput] = useState("");
  const [timeInput, setTimeInput] = useState("");
  const [ytTime, setYtTime] = useState("")

  const handleClick = (e) => {
    e.preventDefault();
    console.log("button working");
  };

  const handleDateSubmit = (ev) => {
    setDateInput(ev.target.value);
  };

  const handleTimeSubmit = (evt) => {
    evt.preventDefault()
    setYtTime(evt.target.value);
    console.log(ytTime)
  };
  
  console.log(ytTime)
  
  

  return (
    <div className="searchbar-container">
      <div className="controlbar">
        <span id="lookupPrompt">Chose a time and date for playlist...</span>

        <form className="search-date-form" 
              onSubmit={handleDateSubmit}>
        <div className="calendar">
        <Cal onChange={handleDateSubmit} 
              handleDateSubmit={handleDateSubmit}/>
        </div>
        
        <input type="time"
                label="time"
                onChange={handleTimeSubmit}/>

        <button className="search-button" onClick={handleClick}>
          Search WUMB Playlist
        </button>


      </form>
      </div>
    </div>
  );
}

export default Searchbar;
