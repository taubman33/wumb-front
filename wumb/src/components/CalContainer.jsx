import React, {useState} from 'react';
import CalendarReact from '../assets/CalendarReact';


//this contains the calendar we'll be using to set the date, unless we want to ditch this
//and just work with the Searchbar in that respective components
//While I think the Calendar is the better option, it does present 2 problems ->
//parsing the date to the format we need (see indivdual CalendarReact component for more notes)
//and this here calendar realllly doesn't like being in Flex. So we'll see what we'll have to do to style it up

function CalContainer({handleDateSubmit}) {

    const [showModal, setShowModal] = useState(false)
    const openCalendar = () => {
        setShowModal(true)
      }

      const closeCalendar = () => {
        setShowModal(false)
      }

      
    if (!showModal) {
    return (
        <div className = "cal-container">

        <button id="openModal"
                onClick={openCalendar}>Open Calendar</button>
        
        </div>
        );
    } else {
        return (
            <div className = "cal-container">
    
            <button id="openModal"
                    onClick={closeCalendar}>Close Calendar</button>
                <div className="cal-start" style={{display:'block'}}>
                    <CalendarReact onClick={handleDateSubmit}/>
                </div>
            </div>
          );
    }
}

export default CalContainer;