import React, { useState } from "react";
import Cal from "./CalContainer";
import AmPmButton from "./AmPmButton";

//contains calendar, search bar for date + time, am/pm button for time search, and Submit button
//unsure if we will use calendar, search bar, both, or neither! 

function Searchbar(props) {
  const [dateInput, setDateInput] = useState("");
  const [timeInput, setTimeInput] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    console.log("button working");
  };

  const handleDateSubmit = (ev) => {
    setDateInput(ev.target.value);
  };

  const handleTimeSubmit = (evt) => {
    setTimeInput(evt.target.value);
  };

  return (
    <div className="searchbar-container">
      <div className="controlbar">
        <span id="lookupPrompt">Chose a time and date for playlist...</span>
        
        <div className="calendar">
        <Cal onChange={handleDateSubmit} 
              handleDateSubmit={handleDateSubmit}/>
        </div>
        
        <div className="searchbar-forms">
          <form onSubmit="return timeForm(event)">
            <label>Date:</label>
            <input
              type="text"
              placeholder="enter month mm/dd/yy"
              value={dateInput}
              onChange={handleDateSubmit}>
            </input>

            <div className ="AmPmButton-container">
            <AmPmButton />
            </div>


            <label>Time:</label>
            <input
              type="text"
              placeholder="enter time"
              value={timeInput}
              onChange={handleTimeSubmit}> 
             </input>

        </form>

{/*  <span id="lookupResults"></span> */}
      </div>
      </div>

   

      <form className="search-date-form">
        <button className="search-button" onClick={handleClick}>
          Search WUMB Playlist
        </button>
      </form>
    </div>
  );
}

export default Searchbar;
