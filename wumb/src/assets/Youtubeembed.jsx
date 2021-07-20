import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ControlBar from "../components/ControlBar";

const YoutubeEmbed = ({ radioData, selectedSong, songId, setSongId }) => {
  const [youTubeData, setYouTubeData] = useState(selectedSong);
  const [onSwitch, setOnSwitch] = useState("true");

  // Fetches youtube data using the 'selectedSong' info
  useEffect(() => {
    const artistUrl = selectedSong.artist.replace(/ /g, "%20");
    const titleUrl = selectedSong.title.replace(/ /g, "%20");
    const url = `https://wumb-proxy-2.herokuapp.com/search-yt-api?artist=${artistUrl}&title=${titleUrl}&live=${onSwitch}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        window.videodata = data;
        setYouTubeData(data[0].id.videoId);
      })
      .catch(console.error);
  }, [selectedSong, onSwitch]);

  // const nextVid = () => {
  //   const song_id = selectedSong.song_id;
  //   if (song_id === radioData.length - 1) {
  //     alert("Too far, go to next day!");
  //   } else {
  //     // removes 'selected' from the className of the currently selected <tr>
  //     const currentSelectedRow = document.getElementById(`song_${song_id}`);
  //     if (currentSelectedRow) {
  //       currentSelectedRow.classList.remove("selected");
  //     }

  //     // adds 'selected' to the className of the previous <tr>
  //     const prevRow = document.getElementById(`song_${song_id + 1}`);
  //     if (prevRow) {
  //       prevRow.classList.add("selected");
  //     }

  //     // Updates the songId hook
  //     setSongId(song_id + 1);
  //   }
  // };

  // const prevVid = () => {
  //   const song_id = selectedSong.song_id;
  //   if (song_id === 0) {
  //     alert("Too early, go to previous day!");
  //   } else {
  //     // removes 'selected' from the className of the currently selected <tr>
  //     const currentSelectedRow = document.getElementById(`song_${song_id}`);
  //     if (currentSelectedRow) {
  //       currentSelectedRow.classList.remove("selected");
  //     }

  //     // adds 'selected' to the className of the previous <tr>
  //     const prevRow = document.getElementById(`song_${song_id - 1}`);
  //     if (prevRow) {
  //       prevRow.classList.add("selected");
  //     }

  //     // Updates the songId hook
  //     setSongId(song_id - 1);
  //   }
  // };

  const urlSwitch = () => {
    if (onSwitch === "true") {
      setOnSwitch("false");
    } else {
      setOnSwitch("true");
    }
  };

  if (selectedSong && youTubeData) {
    return (
      <div className="embed-container">
        <button onClick={urlSwitch}>Toggle Live Search</button>
        <div className="true-message">
          <h2> Live search is currently {onSwitch}</h2>
        </div>
        <div className="video-container">
          <div className="video-responsive">
            <iframe
              src={`https://www.youtube.com/embed/${youTubeData}`}
              allow="autoplay; fullscreen"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>

          {/* <button onClick={prevVid} class="cal-button">
            Previous Track
          </button>
          <button onClick={nextVid} class="cal-button">
            Next Track
          </button> */}
          <div className="youtube-controler">
            <ControlBar
              radioData={radioData}
              songId={songId}
              setSongId={setSongId}
            />
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
