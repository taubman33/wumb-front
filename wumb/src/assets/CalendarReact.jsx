import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


//our next step here is going to be getting the calendar to pass the date as a string 
//and send it into our YT and WUMB fetch methods. 
//date.parse gives back a different style of text than the mmddyy format that we need
//so we are going to need to do something else to get the date, or convert this parsed data, which seems repetitive and not the best option 

export default function CalendarReact() {
    let newDate = new Date()
    const [calDate, setCalDate] = useState('')
    const [cutDate, setCutDate] = useState('')

  const onChange = (newDate) => {
        setCalDate(newDate) 
        let dateString = calDate.toString()
        let cutString = dateString.slice(8,10)
        setCutDate(cutString)
    }

    console.log(cutDate)
    return (
        <div className="result-calendar">
            <Calendar onChange={onChange} 
            value={calDate}
             /> 
        </div>
    )
}