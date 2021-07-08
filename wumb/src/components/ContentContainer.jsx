import React, {useEffect, useState} from 'react';
import YTE from '../assets/Youtubeembed'
import Table from './Table'
import Searchbar from './Searchbar'


const EmbedContainer = (embedId, youtubeLink) => {

    const [radioData, setRadioData] = useState('');
    const [searchYear, setSearchYear] = useState('21')

    const [searchMonth, setSearchMonth] = useState('05')
    const [searchDay, setSearchDay] = useState('27')
    
  // fetch code + return for table.
  useEffect(() => {

      fetch(`https://wumb-proxy-2.herokuapp.com/parse?live=true&d=${searchYear}${searchMonth}${searchDay}`)
      .then((res) =>(res.text()))
      .then(body => {

        const parser = new DOMParser()
        const doc = parser.parseFromString(body, 'text/html')
        const tbs = doc.querySelector("#MainContentTextOnly").querySelectorAll("tbody")
        
        console.log(tbs);
        const data = Array.from(tbs).map( tb => {
            return {
                time: tb.children[0].children[0].innerText.replaceAll("\n", ""), 
                artist: tb.children[0].children[1].innerText.replaceAll("\n", ""), 
                title: tb.children[1].innerText.replaceAll("\n", "")
            }
        })
        setRadioData(data)
        
    })
      .catch(console.error);

  }, [searchYear, searchMonth, searchDay]);



  //need Youtube ID for Embed Link -> Different API data needs to be passed here through the Table and YT components
  //Fetch to receieve Embed Link and then pass it into here stately

    return (
        <div className="embed-container">

           <div className="searchbar-container">
            <Searchbar setSearchYear={setSearchYear} setSearchMonth={setSearchMonth} setSearchDay={setSearchDay} />
          </div>
            <div className="youtube-player">
            <YTE embedId={youtubeLink} radioData={radioData}/>
            </div>

            <div className="queue-table">
            <Table radioData={radioData}
                            searchDay={searchDay}
                            searchMonth={searchMonth}
                            searchYear={searchYear}
                           />
            </div>

        </div>
    );
}

export default EmbedContainer;