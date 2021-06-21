import React from "react";
import PropTypes from "prop-types";

//other iframe and yte commands?


const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">

    <h3> Ginny Jones</h3>
    <iframe
      width="60%"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;