import React from 'react';
import Cal from './CalContainer'
function Searchbar(props) {
    return (
        <div className ="searchbar-container">

       <div className="calendar">
                    <Cal />
                    </div>

        <div className="search-date-form">        
        <form>
            <input type="text"
                   placeholder="enter month mm/dd/yy">
            </input>
        </form>
        </div>    


        <div className="search-time-form">        
        <form>
            <input type="text"
                   placeholder="enter time">
            </input>
        </form>
        </div>    


        </div>
    );
}

export default Searchbar;