import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";


const YoutubeEmbed = ({ radioData, i }) => {
  const [youTubeData, setYouTubeData] = useState(radioData);
  const [displayNum, setdisplayNum] = useState(0);
  const [onSwitch, setOnSwitch] = useState("true");


  useEffect(
    (i) => {
      const artistUrl = radioData[displayNum].artist.replace(/ /g, "%20");
      const titleUrl = radioData[displayNum].title.replace(/ /g, "%20");

      const url = `https://wumb-proxy-2.herokuapp.com/search-yt-api?artist=${artistUrl}&title=${titleUrl}&live=${onSwitch}`;

      console.log(displayNum);
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          window.videodata = data;
          setYouTubeData(data[0].id.videoId);
        })
        .catch(console.error);
    },
    [radioData, displayNum]
  );

  const nextVid = () => {
    setdisplayNum(displayNum + 1);
    console.log(displayNum);
  };

  const urlSwitch = () => {
    if (onSwitch == "true") {
      setOnSwitch("false");
    } else {
      setOnSwitch("true");
    }
  };

  console.log(displayNum);

  if (radioData && youTubeData) {
    console.log("display num third", displayNum);
    return (
      <div className="embed-container">
        <div className = "true-message">
          <h2> Live search is currently {onSwitch}</h2>
        </div>
        <div className="video-container">
          <div className="video-responsive">
            <iframe
              src={`https://www.youtube.com/embed/${youTubeData}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              controls="0"
              title="Embedded youtube"
            />
          </div>

          <div className="screen-buttons">
            <button className="cal-button" onClick={nextVid}>
              Next Video!
            </button>
          

            <button className="cal-button" onClick={urlSwitch}>
              Toggle Live Search 
            </button>
          </div>

        </div>
      </div>
    );
  } else {
    return <div> Loading, please wait!!</div>;
  }
};
YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
