import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


//our next step here is going to be getting the calendar to pass the date as a string 
//and send it into our YT and WUMB fetch methods. 
//date.parse gives back a different style of text than the mmddyy format that we need
//so we are going to need to do something else to get the date, or convert this parsed data, which seems repetitive and not the best option 
//searchbar vs calendar, which do we want?

export default function CalendarReact() {
    // set states of calendar date
    let newDate = new Date()
    const [calDate, setCalDate] = useState(newDate)

    //date.parse doesn't do exactly what we want to do, so we'll need to find a better way of doing it
    function onChange (newDate) {
        setCalDate(newDate)
        // Date.parse(calDate)
        console.log(calDate)
    }

    return (
        <div className="result-calendar">
            <Calendar onChange={onChange} 
            value={calDate}
             /> 
        </div>
    )

}