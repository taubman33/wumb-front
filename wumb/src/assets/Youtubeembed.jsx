import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ControlBar from "./ControlBar";

const YoutubeEmbed = ({ radioData }) => {

  const [youTubeData, setYouTubeData] = useState(radioData)
  const [displayNum, setdisplayNum] = useState(0)

  

  // const [ytArtist, setytArtist] = useState(radioData[0].artist)
  // const [ytTitle, setytTitle] = useState(radioData[0].title)


  useEffect(() => {
  
    const artistUrl = (radioData[displayNum].artist).replace(/ /g, '%20');
    const titleUrl = (radioData[displayNum].title).replace(/ /g, '%20');
    const url = (`https://wumb-proxy-2.herokuapp.com/search-yt-api?artist=${artistUrl}&title=${titleUrl}&live=true`)
    
    fetch(url)
    .then((res) =>(res.json()))
    .then(data => {
      window.videodata = data;
      setYouTubeData(data[0].id.videoId) 
  })
    .catch(console.error);
}, [radioData]);

  if (radioData && youTubeData) {
    console.log('display num third', displayNum)
    return (

  <div className = "embed-container">

      

<div className ="video-container">
        <div className="video-responsive">
          <iframe
            src={`https://www.youtube.com/embed/${youTubeData}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            controls="0"
            title="Embedded youtube"
          />
        </div>

      </div>



  </div> 

);
}
else {
  return (
    <div> Loading, please wait!!</div>
  )
}
}
YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;