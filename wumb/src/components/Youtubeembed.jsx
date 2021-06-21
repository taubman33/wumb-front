import React from "react";
import PropTypes from "prop-types";

//other iframe and yte commands?


const YoutubeEmbed = ({ embedId }) => (
  
  <div className = "embed-container">
    <div className = "embed-text">
      <h3> Artist:</h3>
      <h3> Song: </h3>
    </div>


        <div className="video-responsive">
          <iframe
            width="60%"
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;