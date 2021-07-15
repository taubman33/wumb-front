import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ radioData, selectedSong, i }) => {
  const [youTubeData, setYouTubeData] = useState(selectedSong);
  const [displayNum, setdisplayNum] = useState(0);
  const [onSwitch, setOnSwitch] = useState("true");

  useEffect(
    (i) => {
      const artistUrl = selectedSong.artist.replace(/ /g, "%20");
      const titleUrl = selectedSong.title.replace(/ /g, "%20");
      console.log(artistUrl)
      console.log(titleUrl)
      const url = `https://wumb-proxy-2.herokuapp.com/search-yt-api?artist=${artistUrl}&title=${titleUrl}&live=${onSwitch}`;

      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          window.videodata = data;
          setYouTubeData(data[0].id.videoId);
        })
        .catch(console.error);
    },
    [selectedSong, onSwitch]
  );

  const nextVid = () => {
    if (displayNum < radioData.length - 1) {
      setdisplayNum(displayNum + 1);
    }
    return "";
  };

  const prevVid = () => {
    if (displayNum > 0) {
      setdisplayNum(displayNum - 1);
    }
    return "";
  };

  const urlSwitch = () => {
    if (onSwitch === "true") {
      setOnSwitch("false");
    } else {
      setOnSwitch("true");
    }
  };

  if (radioData && youTubeData) {
    return (
      <div className="embed-container">
        <div className="true-message">
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

          <button onClick={prevVid} class="cal-button">
            Previous Video
          </button>
          <button onClick={nextVid} class="cal-button">
            Next Video
          </button>

          <button className="cal-button" onClick={urlSwitch}>
            Toggle Live Search
          </button>
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
