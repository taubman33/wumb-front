import React, {useState, useEffect} from "react";

function Table({ radioData, searchDay, searchMonth, searchYear }) {

  const [displayDay, setdisplayDay] = useState('')
  const [displayMonth, setdisplayMonth] = useState('')
  const [displayYear, setdisplayYear] = useState('')
  const [displayData, setdisplayData] = useState('')

  useEffect(() => {
   setdisplayDay(searchDay)
   setdisplayMonth(searchMonth)
   setdisplayYear(searchYear)
   setdisplayData(radioData)

}, [searchYear, searchMonth, searchDay, radioData]);




  if (radioData.length && searchDay && searchMonth) {
    return ( 
      <div className="table-container">
      <div className="table">
        <h2> {searchMonth}/{searchDay}/20{searchYear}</h2>
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
              <td>{radioData[0].time}</td>
              <td>{radioData[0].artist}</td>
              <td>{radioData[0].title}</td>
              <td>null</td>
            </tr>


           <tr className="row row-even">
              <td>{radioData[1].time}</td>
              <td>{radioData[1].artist}</td>
              <td>{radioData[1].title}</td>
              <td>null</td>
            </tr>
            <tr className="row row-odd">
              <td>{radioData[2].time}</td>
              <td>{radioData[2].artist}</td>
              <td>{radioData[2].title}</td>
              <td>null</td>
            </tr>
            <tr className="row row-even">
              <td>{radioData[3].time}</td>
              <td>{radioData[3].artist}t</td>
              <td>{radioData[3].title}</td>
              <td>null</td>
            </tr>
            <tr className="row row-odd">
              <td>{radioData[4].time}</td>
              <td>{radioData[4].artist}</td>
              <td>{radioData[4].title}</td>
              <td>null</td>
            </tr>
            <tr className="row row-even">
              <td>{radioData[5].time}</td>
              <td>{radioData[5].artist}</td>
              <td>{radioData[5].title}</td>
              <td>null</td>
            </tr> 
          </tbody>

        </table>
      </div>
      </div>
    
    );
  } 
  else {
    return <div>Loading, Please Wait!!</div>;
  }
}

export default Table;
