import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ControlBar from "./ControlBar";

const YoutubeEmbed = ({ radioData }) => {

  console.log (radioData[0].artist)

  const [youTubeData, setYouTubeData] = useState(radioData)


  // const [ytArtist, setytArtist] = useState(radioData[0].artist)
  // const [ytTitle, setytTitle] = useState(radioData[0].title)
  
  useEffect(() => {
    console.log(radioData[0])
      const artistUrl = (radioData[0].artist).replace(/ /g, '%20');
      const titleUrl = (radioData[0].title).replace(/ /g, '%20');
    const url = (`https://wumb-proxy-2.herokuapp.com/search-yt-api?artist=${artistUrl}&title=${titleUrl}&live=true`)
    console.log("THIS IS OUR URL", url)
    fetch(url)
    .then((res) =>(res.json()))
    .then(data => {
      window.videodata = data;
      console.log(data[0])
      console.log(data[0].id.videoId)
      setYouTubeData(data[0].id.videoId)
 
  })
    .catch(console.error);

}, [radioData]);

  if (radioData && youTubeData) {
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
    <div> Loading, please wait!!</div>
  )
}
}
YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;