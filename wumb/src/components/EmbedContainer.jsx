import React, {useEffect, useState} from 'react';
import ReactDOMServer from 'react-dom/server';
// import ReactHtmlParser from 'react-html-parser';
import parse from 'html-react-parser';
import YTE from './Youtubeembed'
import Table from './Table'
import Searchbar from './Searchbar'


const EmbedContainer = (embedId, youtubeLink) => {

    const [radioData, setRadioData] = useState('');
    const [searchYear, setSearchYear] = useState(21)
    //can not start with 0, needs to be single digit for 1-9 (Jan-Sept), but 10-12 (Oct-Dec) will work with no problem here
    //for dates too (1-9 vs 10-31)

    //with calendar data being passed up and down we may have to use Context for this. 
    const [searchMonth, setSearchMonth] = useState(5)
    const [searchDay, setSearchDay] = useState(22)



    // const [num, setNum] = useState(0)
    const num = 0

    

  useEffect(() => {
      fetch(`https://wumb-proxy-2.herokuapp.com/parse?live=false&d=${searchYear}0${searchMonth}${searchDay}`)
      .then((res) =>(res.text()))
      .then(body => {

        const parser = new DOMParser()
        const doc = parser.parseFromString(body, 'text/html')
        const tbs = doc.querySelector("#MainContentTextOnly").querySelectorAll("tbody")

        const data = Array.from(tbs).map( tb => {
            return {
                time: tb.children[0].children[0].innerText.replaceAll("\n", ""), 
                artist: tb.children[0].children[1].innerText.replaceAll("\n", ""), 
                title: tb.children[1].innerText.replaceAll("\n", "")
            }
        })
        setRadioData(data)
   
        // displayPlaylistTable(data)   
        
    })
      .catch(console.error);

  }, []);

  
  // console.log(radioData[0].time) 


  //need Youtube ID for Embed Link -> Different API call here? 
  //Fetch to receieve Embed Link and then pass it into here stately
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