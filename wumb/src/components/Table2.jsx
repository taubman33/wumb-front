import React, { useState } from 'react';

//finding proper url to pull from
//pulling data -> setting any # of things in state?
//running parser -> html data to jsx?
// rendering parsed data -> table w correct styling

function Table2 () {
    
    //creating state for eventually pulled data
    const [data, setdata] = useState({})

    //scraper endpoint
    // const scraperEndpoint = {PROD_ON} ? "https://wumb-proxy-1.herokuapp.com/parse" + scraperParam: "http://127.0.0.1:3003/parse" + scraperParam
     const scraperEndpoint = "fake"

     
    //displaying the playlist table to render
    function displayPlaylistTable(playlist, v1=false) {
        //creating table and initiating rows and columns
        const table = document.createElement("table")
        let row     = null
        let col     = null
        // if (bTestingMaxRows) {
        //     playlist = playlist.slice(0, testMaxRows)
        // }
        playlist.forEach(item => {
            row = document.createElement("tr")
            for (key of ["time", "artist", "title"]) {
                col = document.createElement("td")
                col.innerText = item[key]
                row.appendChild(col)
            }

            if (!v1) {
                col = document.createElement("td")
                col.innerText = "loading..."
                setElementValue(col, item, maxRes=1)
                row.appendChild(col)
            }
            table.appendChild(row)
            
            if (v1) {
                row = document.createElement("tr")
                col = document.createElement("td")
                col.innerText = "loading..."
                setElementValue(col, item)
                row.appendChild(col)
                table.appendChild(row)
            }
        })
        const div = document.getElementById("playlistMain")
        div.appendChild(table)
        setHighlightClass(v1=v1)
        
    }



    fetch(scraperEndpoint)
    .then(res => {
        res.text()   
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
                console.log(data)
                
                displayPlaylistTable(data)
                
            })
    })
}

export default Table2;