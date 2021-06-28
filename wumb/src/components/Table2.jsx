import React from 'react';

const url ="null"

//finding proper url to pull from
//pulling data -> setting any # of things in state?
//running parser -> html data to jsx?
// rendering parsed data -> table w correct styling

function scrapeArchive () {
    fetch(url)
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






function Table2(props) {
    return (
        <div>
            
        </div>
    );
}

export default Table2;