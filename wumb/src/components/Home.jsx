import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import Cal from './CalContainer'

function Home(props) {


    const [radioData, setRadioData] = useState({});

    useEffect(() => {
      fetch(`https://wumb-site-mock.herokuapp.com/yt-search`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.items);
          setRadioData(data.items);
          console.log([radioData])
        // console.log(radioData.items)
        })
        .catch(console.error);
    }, []);
    return (
        <div className ="home-screen-container">
{/* 
       <div className="calendar">
        <Cal />
       </div>

        
        <div className="home-text-container">
            <h2> Welcome to the WUMB Listen app! Please select a date/program to listen to on the calendar</h2>
        </div>


        <div className ="player-link">
            <Link to="/player"> <h2> Go to Youtube Player! </h2></Link>
        </div> */}

        


        </div>
    );
}

export default Home;