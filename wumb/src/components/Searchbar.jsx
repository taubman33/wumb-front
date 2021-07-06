import React, {useState} from 'react';
import Cal from './CalContainer'
import AmPmButton from './AmPmButton'


function Searchbar(props) {
 
    const [dateInput,  setDateInput] = useState('')
    const [timeInput,  setTimeInput] = useState('')


    const handleClick = (e) => {
        e.preventDefault()
        console.log('button working')
    }

    const handleDateSubmit =(ev) => {
          setDateInput(ev.target.value)
    }

    const handleTimeSubmit =(evt) => {
          setTimeInput(evt.target.value)
    }

    return (
        <div className ="searchbar-container">

       <div className="calendar">
                    <Cal onChange={handleDateSubmit}
                        handleDateSubmit={handleDateSubmit}/>
                    </div>

        <div className="search-date-form-container">        
        <form className="search-date-form">
            <input type="text"
                   placeholder="enter month mm/dd/yy"
                   value={dateInput}
                   onChange={handleDateSubmit}>       
            </input>

            <input type="text"
                   placeholder="enter time"
                   value={timeInput}
                   onChange={handleTimeSubmit}>
            </input>
             
         <AmPmButton/>

            <button 
            className="NavButton"
             onClick={handleClick}> 
             Search WUMB Playlist
             </button>
       
        </form>
        </div>    


        </div>
    );
}

export default Searchbar;