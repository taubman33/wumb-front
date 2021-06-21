import React, { useState } from "react";
import PropTypes from "prop-types";


const dummyData = [
  {artist: "George Benson",
   song: "Breezin'",
   embedId:"G1QjyskJ9jw"},

   {artist: "Doc Watson",
   song: "Shady grove",
   embedId:"b-kaG1NuLZM"},


   {artist: "Scraper Blackwell",
   song: "Nobody Knows You When You're Down and Out",
   embedId:"626pNZB8xXE"},
]



function YoutubeEmbed({ embedId }){

  const [num, setNum] = useState(0);

  let artist = dummyData[num].artist
  let song = dummyData[num].song
  // let youtubeLink = dummyData[0].embedId
 
  // function nextLink() {
  //   num++
  //   setNum(num)
  // }
  return(
  <div className = "embed-container">

        <div className = "embed-text">
          <h3> Artist: {artist}</h3>
          <h3> Song: {song} </h3>
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


        <div className="youtube-queue">
            <h3> next links</h3>


            <button>
              <h3> Next Video</h3>
            </button>
        </div>


  </div>
);
}

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;