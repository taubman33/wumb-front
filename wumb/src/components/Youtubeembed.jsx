import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ControlBar from "./ControlBar";

const YoutubeEmbed = ({ embedId, radioData, num }) => {

  const [youTubeData, setYouTubeData] = useState([])
  const url = ('https://wumb-proxy-2.herokuapp.com/search-yt-api?time=1:35%20pm&artist=Karen%20Dalton&title=Something%20on%20Your%20Mind%20(from%20In%20My%20Own%20Time)&minsAfter=23&date=5-22-21&live=false&')

  useEffect(() => {
    fetch(url)
    .then((res) =>(res.json()))
    .then(data => {
      console.log('hello + ', data)
      setYouTubeData(data)
      console.log()
      
  })
    .catch(console.error);

}, []);




  if (radioData && radioData[num]) {
    return (

  <div className = "embed-container">

      <div className="control-bar-container">
      <ControlBar/>
      </div>

  

        <div className="video-responsive">
          <iframe
            src={`https://www.youtube.com/embed/${embedId}`}
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