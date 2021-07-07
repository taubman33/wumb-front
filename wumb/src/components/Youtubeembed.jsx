import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ControlBar from "../assets/ControlBar";


//this is where things are going to get difficult
//we now need to get the time and date pulled from the Calendar / Searchbar components
//and then pass the data into the components with fetch methods to pull from the 2 api's
//the radio one (table data) and the youtube one (video embed id data) to their respective components 

//we may want to reconfigure this whole thing and use Context, and maybe even import the fetch commands from our API folder
//since we want to use Auth/Login, useContext may already be a necessary future step. We'll see. 
//but lets get it goings step by step first -> parsing calendar data to strings or getting text input working properly
//so that we can pass the data into the search url and get dynamic answers + having vid + table match
// 'next' and 'previous' buttons etc  will come after

const YoutubeEmbed = ({ embedId, radioData, num }) => {

  const [youTubeData, setYouTubeData] = useState({})

  
  const url = ('https://wumb-proxy-2.herokuapp.com/search-yt-api?time=1:35%20pm&artist=Karen%20Dalton&title=Something%20on%20Your%20Mind%20(from%20In%20My%20Own%20Time)&minsAfter=23&date=5-22-21&live=false&')


  //using dummy url (no variables in there yet) to find the Youtube link so that we can get
  //the youtube embed id to put in the embedded player.

  
  useEffect(() => {
    fetch(url)
    .then((res) =>(res.json()))
    .then(data => {
      setYouTubeData(data[0].id.videoId)
  })
    .catch(console.error);

}, []);


  if (radioData && youTubeData && radioData[num]) {
    return (

  <div className = "embed-container">

       <div className="control-bar-container">
      <ControlBar/>
      </div>  

        <div className="video-responsive">
          <iframe
            src={`https://www.youtube.com/embed/${youTubeData}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>

  </div> 

);
}
else {
  return (
    <div> Loading, please wait </div>
  )
}
}
YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;