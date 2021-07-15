import React, { useEffect, useState } from "react";
import YTE from "../assets/Youtubeembed";
import Table from "./Table";
import Searchbar from "./Searchbar";

const EmbedContainer = () => {
  const today = new Date()              // creates todays date
    .toLocaleDateString()               // converts to string in (month/date/year) format
    .split("/")                         // converts to array with 3 items [month,date,year]
    .map((i) => (i = "0" + i))          // adds an extra zero for single digit dates (i.e. may 6th)
    .map((i) => i.slice(-2));           // returns array with with items [mm, dd, yy]

  const [radioData, setRadioData] = useState("");
  const [selectedSong, setSelectedSong] = useState([]);
  const [searchYear, setSearchYear] = useState(today[2]);
  const [searchMonth, setSearchMonth] = useState(today[0]);
  const [searchDay, setSearchDay] = useState(today[1]);

  // fetch code + return for table.
  useEffect(() => {
    fetch(
      `https://wumb-proxy-2.herokuapp.com/parse?live=true&d=${searchYear}${searchMonth}${searchDay}`
    )
      .then((res) => res.text())
      .then((body) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(body, "text/html");
        const tbs = doc
          .querySelector("#MainContentTextOnly")
          .querySelectorAll("tbody");
        const data = Array.from(tbs).map((tb) => {
          return {
            time: tb.children[0].children[0].innerText.replaceAll("\n", ""),
            artist: tb.children[0].children[1].innerText.replaceAll("\n", ""),
            title: tb.children[1].innerText.replaceAll("\n", ""),
          };
        });
        setRadioData(data);
        setSelectedSong(data[0]);
      })
      .catch(console.error);
  }, [searchYear, searchMonth, searchDay]);

  return (
    <div className="embed-container">
      <div className="youtube-player">
        {radioData ? (
          <div>
            <YTE radioData={radioData} selectedSong={selectedSong} />
          </div>
        ) : null}
      </div>

      <div className="searchbar-container">
        {radioData ? (
          <Searchbar
            setSearchYear={setSearchYear}
            setSearchMonth={setSearchMonth}
            setSearchDay={setSearchDay}
          />
        ) : null}
      </div>

      <div className="queue-table">
        <Table
          radioData={radioData}
          searchDay={searchDay}
          searchMonth={searchMonth}
          searchYear={searchYear}
          setSelectedSong={setSelectedSong}
        />
      </div>
    </div>
  );
};

export default EmbedContainer;
