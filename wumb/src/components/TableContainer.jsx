import React, {useEffect, useState} from 'react';
import Table from './Table'

function TableContainer(searchMonth, searchYear, searchDay) {

    const [radioData, setRadioData] = useState('');


    useEffect(() => {
        fetch(`https://wumb-proxy-2.herokuapp.com/parse?live=true&d=${searchYear}${searchMonth}${searchDay}`)
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
          
      })
        .catch(console.error);
  
    }, []);


    return (
        <div className="table-container">
            <Table/>
        </div>
    )
}

export default TableContainer