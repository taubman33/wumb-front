import React, { useState } from "react";

//we have 'player' here for the player, but the embed component uses a diffeerent terminology.
//ergo, we will have to connect the two eventually and change some wordage.
//But between the fetch command and the date/time setup, these are 4th or 5th in our task agenda heirarchy.

function ControlBar({songId, setSongId, selectedSong, radioData}) {
  
  // TODO: meed to figure out how to set up player
  var player;
  const [videoIsPaused, setVideoIsPaused] = useState(false)

  function nextVideo() {
    if (songId === radioData.length - 1) {
      console.log('No next song to play')
    } else {
      // removes 'selected className from the current row
      const currentSelectedRow = document.getElementById(`song_${songId}`)
      if (currentSelectedRow) {
        currentSelectedRow.classList.remove("selected")
      } else {
        console.log(`FAILED TO GET CURRENT SONG by ElementId 'song_${songId}'`)
      }
      
      // adds 'selected' className to the next row
      const nextRow = document.getElementById(`song_${songId + 1}`)
      if (nextRow) {
        nextRow.classList.add("selected")
      } else {
        console.log(`FAILED TO GET NEXT SONG by ElementId 'song_${songId + 1}'`)
      }

      // sets new song to play
      setSongId(songId + 1)
      // player.playVideo();
    }
  }
  function previousVideo() {
    if (songId === 0) {
      console.log('No next song to play')
    } else {
      // removes 'selected className from the current row
      const currentSelectedRow = document.getElementById(`song_${songId}`)
      if (currentSelectedRow) {
        currentSelectedRow.classList.remove("selected")
      } else {
        console.log(`FAILED TO GET CURRENT SONG by ElementId 'song_${songId}'`)
      }
      
      // adds 'selected' className to the previous row
      const previousRow = document.getElementById(`song_${songId - 1}`)
      if (previousRow) {
        previousRow.classList.add("selected")
      } else {
        console.log(`FAILED TO GET NEXT SONG by ElementId 'song_${songId - 1}'`)
      }

      // sets new song to play
      setSongId(songId - 1)
      // player.playVideo();
    }
  }

  function playPauseVideo() {
    if (!videoIsPaused) {
      // player.pauseVideo();
      setVideoIsPaused(true)
      console.log("video paused");
    } else {
      // player.playVideo();
      setVideoIsPaused(false)
      console.log("video playing")
    }
  }

  return (
    <div id="controlbar" className="controlbar">
      <button onClick={previousVideo}>Prev</button>
      <button onClick={playPauseVideo}>{videoIsPaused ? 'Play' : 'Pause'}</button>
      <button onClick={nextVideo}>Next</button>
    </div>
  );
}

export default ControlBar;
