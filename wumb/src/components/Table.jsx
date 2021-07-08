import React, {useState, useEffect} from "react";

function Table({ radioData, num, searchDay, searchMonth, searchYear }) {

  const [displayDay, setdisplayDay] = useState('')
  const [displayMonth, setdisplayMonth] = useState('')
  const [displayYear, setdisplayYear] = useState('')
  const [displayData, setdisplayData] = useState('')

//   useEffect(() => {
//    setdisplayDay(searchDay)
//    setdisplayMonth(searchMonth)
//    setdisplayYear(searchYear)
//    setdisplayData(displayData)
//    console.log('set')
//    console.log('set date ', displayDay, displayMonth, displayYear)

// }, [searchYear, searchMonth, searchDay, radioData]);

console.log(radioData[3])
console.log({searchMonth}, {searchDay}, {searchYear})

// return (
//   <div>
//     <h2> {searchDay} / {searchMonth} / {searchYear}</h2>
//   </div>
// )

  if (radioData && searchDay && searchMonth ) {
    return (
      <div className="table">
        <h2>{displayDay} / {displayMonth} / {displayYear}</h2>
         <table>
          <thead>
            <tr className="table-header">
              <th>Time</th>
              <th>Artist</th>
              <th>Title</th>
              <th>ID</th>
            </tr>
          </thead>

          <tbody>
            <tr className="row row-odd selected">
              <td>{displayData[num].time}</td>
              <td>{displayData[num].artist}</td>
              <td>{displayData[num].title}</td>
              <td>null</td>
            </tr>
          <tr className="row row-even">
              <td>{displayData[1].time}</td>
              <td>{displayData[1].artist}</td>
              <td>{displayData[1].title}</td>
              <td>null</td>
            </tr>
            <tr className="row row-odd">
              <td>{displayData[2].time}</td>
              <td>{displayData[2].artist}</td>
              <td>{displayData[2].title}</td>
              <td>null</td>
            </tr>
            <tr className="row row-even">
              <td>{displayData[3].time}</td>
              <td>{displayData[3].artist}t</td>
              <td>{displayData[3].title}</td>
              <td>null</td>
            </tr>
            <tr className="row row-odd">
              <td>{displayData[4].time}</td>
              <td>{displayData[4].artist}</td>
              <td>{displayData[4].title}</td>
              <td>null</td>
            </tr>
            <tr className="row row-even">
              <td>{displayData[5].time}</td>
              <td>{displayData[5].artist}</td>
              <td>{displayData[5].title}</td>
              <td>null</td>
            </tr> 
          </tbody>
        </table>
      </div>
    );
  } 
  else {
    return <div>Loading, Please Wait!!</div>;
  }
}

export default Table;
