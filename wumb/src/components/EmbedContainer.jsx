import React from 'react';
import YTE from './Youtubeembed'
import Table from './Table'


const EmbedContainer = (embedId, youtubeLink) => {
    return (
        <div className="embed-container">

            <div className="youtube-player">
            <YTE embedId={youtubeLink}/>
            </div>

            <div className="queue-tablee">
            <Table />
            </div>

        </div>
    );
}

export default EmbedContainer;