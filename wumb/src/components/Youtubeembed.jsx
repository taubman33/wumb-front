import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";



const YoutubeEmbed = ({ embedId }) => {

  const [radioData, setRadioData] = useState({});
  const [num, setNum] = useState(0)

  useEffect(() => {
    fetch(`https://wumb-site-mock.herokuapp.com/yt-search`)
      .then((res) => res.json())
      .then((data) => {
        setRadioData(data.items);
      })
      .catch(console.error);
  }, []);




  if (radioData && radioData[num]) {
    return (

  <div className = "embed-container">

        <div className = "embed-text">
          <h3> Title: {radioData[3].snippet.title}  </h3>
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


        <div className="row">
        
            <table id="simple-board">
               <tbody>
                 Title
                 {/* {rows} */}
               </tbody>
             </table>
      
        </div>

        <div className="yt-button">
            <button>
              <h3> Next Video</h3>
            </button>
        </div>


  </div>
);
}
else {
  return (
    <div> no data!</div>
  )
}
}
YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;