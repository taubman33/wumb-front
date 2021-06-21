import React from "react";
import PropTypes from "prop-types";

//other iframe and yte commands?


function YoutubeEmbed({ embedId, artist, song }){
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
        </div>


  </div>
);
}

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;