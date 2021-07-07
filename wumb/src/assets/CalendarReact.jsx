import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

//our next step here is going to be getting the calendar to pass the date as a string
//and send it into our YT and WUMB fetch methods.
//date.parse gives back a different style of text than the mmddyy format that we need
//so we are going to need to do something else to get the date, or convert this parsed data, which seems repetitive and not the best option

export default function CalendarReact({setSearchYear, setSearchMonth, setSearchDay}) {
  let newDate = new Date();
  const [calDate, setCalDate] = useState(new Date(Date.parse("2021-06-01")));
  const [cutDate, setCutDate] = useState("");
  const [cutMonth, setCutMonth] = useState("");


  useEffect(() => {
    setSearchDay(calDate.getDay().toString().padStart(2,0))
    setSearchMonth((calDate.getMonth() + 1).toString().padStart(2,0))
    console.log("THIS IS THE MONTH",calDate.getMonth() + 1)
    console.log("THIS IS THE DATE",calDate)
    // setSearchMonth(calDate.getMonth().toString().padStart(2,0))
    window.caldate = calDate;
  }, [calDate, setSearchDay, setSearchMonth])


    const dateData = (newDate) => {
        setCalDate(newDate)
        console.log(calDate)
    }

    const monthData = (newDate) => {
        setCalDate(newDate);
        let monthString = calDate.toString();
        let cutString = monthString.slice(4, 7);

        if (cutString === "Jan") {
        setCutMonth("01");
        } else if (cutString === "Feb") {
        setCutMonth("02");
        } else if (cutString === "Mar") {
        setCutMonth("03");
        } else if (cutString === "Apr") {
        setCutMonth("04");
        } else if (cutString === "May") {
        setCutMonth("05");
        } else if (cutString === "Jun") {
        setCutMonth("06");
        } else if (cutString === "Jul") {
        setCutMonth("07");
        } else if (cutString === "Aug") {
        setCutMonth("08");
        } else if (cutString === "Sep") {
        setCutMonth("09");
        } else if (cutString === "Oct") {
        setCutMonth("10");
        } else if (cutString === "Nov") {
        setCutMonth("11");
        } else if (cutString === "Dec") {
        setCutMonth("12");
        } else {
            console.log('error!')
        }
    };
  

  console.log(cutDate);
  return (
    <div className="result-calendar">
      <Calendar onChange={dateData} value={calDate} />
    </div>
  );
}
