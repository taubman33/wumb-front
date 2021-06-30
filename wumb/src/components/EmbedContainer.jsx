import React, {useEffect, useState} from 'react';
import ReactDOMServer from 'react-dom/server';
import YTE from './Youtubeembed'
import Table from './Table'
import Searchbar from './Searchbar'

const EmbedContainer = (embedId, youtubeLink) => {

    const [radioData, setRadioData] = useState('');
    const [num, setNum] = useState(0)

  useEffect(() => {
 
      fetch(`https://wumb-proxy-2.herokuapp.com/parse`)
      .then((data) => {
        ReactDOMServer.renderToString(radioData)
        setRadioData(data)
        console.log(radioData);
      })
      // .then(ReactDOMServer.renderToString(radioData))
      .then(console.log("type of", typeof (radioData)))
      .then(console.log("hello", radioData))
      .catch(console.error);

  }, []);


    return (
        <div className="embed-container">

          <div className="searchbar-container">
            <Searchbar/>
          </div>
            <div className="youtube-player">
            <YTE embedId={youtubeLink} radioData={radioData} num={num}/>
            </div>

            <div className="queue-table">
            <Table radioData={radioData} num={num}/>
            </div>

        </div>
    );
}

export default EmbedContainer;