import React, {useState} from 'react';
import CalendarReact from '../assets/CalendarReact';

function CalContainer(props) {

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
                <div className="cal-start">
                    <CalendarReact/>
                </div>
            </div>
          );
    }
}

export default CalContainer;