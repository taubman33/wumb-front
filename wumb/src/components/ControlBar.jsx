import React from 'react';

function ControlBar(props) {
    return (
        <div>
        <div id="controlbar" className="controlbar">

        <button onClick="previousVideo()">Prev</button>
        <button onClick="nextVideo()">Next </button>
        <button onClick="playVideo()">Play</button>
        <button onClick="pauseVideo()">Pause</button>


    </div>
        </div>
    );
}

export default ControlBar;