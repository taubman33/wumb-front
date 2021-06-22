import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import Cal from './CalContainer'

function Home(props) {

        return (
            <div className ="home-screen-container">  
                    <div className="calendar">
                    <Cal />
                    </div>
     
             
                    <div className="home-text-container">
                        <h2> Welcome to the WUMB Listen app! Please select a date/program to listen to on the calendar</h2>
                    </div>
            
     
                    <div className ="player-link">
                        <Link to="/player"> <h2> Go to Youtube Player! </h2></Link>
                    </div> 
    
             
     
     
             </div>
     
        )
    
}

export default Home;