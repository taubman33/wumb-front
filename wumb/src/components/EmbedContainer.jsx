import React, {useEffect, useState} from 'react';
import YTE from './Youtubeembed'
import Table from './Table'


const EmbedContainer = (embedId, youtubeLink) => {

    const [radioData, setRadioData] = useState({});
    const [num, setNum] = useState(0)

  useEffect(() => {
    fetch(`https://wumb-proxy-2.herokuapp.com/parse`)
      .then((res) => res.json())
      .then((data) => {
        setRadioData(data.items);
      })
      .catch(console.error);
  }, []);

    return (
        <div className="embed-container">

            <div className="youtube-player">
            <YTE embedId={youtubeLink} radioData={radioData} num={num}/>
            </div>

            <div className="queue-tablee">
            <Table radioData={radioData} num={num}/>
            </div>

        </div>
    );
}

export default EmbedContainer;