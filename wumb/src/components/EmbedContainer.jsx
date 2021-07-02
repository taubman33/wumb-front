import React, {useEffect, useState} from 'react';
import ReactDOMServer from 'react-dom/server';
// import ReactHtmlParser from 'react-html-parser';
import parse from 'html-react-parser';
import YTE from './Youtubeembed'
import Table from './Table'
import Searchbar from './Searchbar'


const EmbedContainer = (embedId, youtubeLink) => {

    const [radioData, setRadioData] = useState([]);
    // const [num, setNum] = useState(0)
    const num = 0

  useEffect(() => {
 
      fetch(`https://wumb-proxy-2.herokuapp.com/parse?live=false&d=210522`)
      // .then((res) => res.json())
      .then((res) => {
        // setRadioData(ReactDOMServer.renderToString([res]))
        parse(res)
        setRadioData(res)
        console.log(radioData)
      })
      .then(console.log("type of", typeof (radioData)))
      .then(console.log("hello", radioData))
      .catch(console.error);

  }, [radioData]);


    return (
        <div className="embed-container">

          <div className="searchbar-container">
            <Searchbar/>
          </div>
            <div className="youtube-player">
            <YTE embedId={youtubeLink} radioData={radioData} num={num}/>
            </div>

            {/* <div className="queue-table">
            <Table radioData={radioData} num={num}/>
            </div> */}

        </div>
    );
}

export default EmbedContainer;