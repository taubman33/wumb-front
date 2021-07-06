import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';



export default function CalendarReact() {
    // set states of calendar date
    let newDate = new Date()
    const [calDate, setCalDate] = useState(newDate)

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