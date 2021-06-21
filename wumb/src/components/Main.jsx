import React, { useState } from "react";
import { Route } from "react-router-dom";
import YTE from "./Youtubeembed";
import Login from "../forms/Login";
import Register from "../forms/Register";
import Cal from "./CalContainer";

//fetch call here?
//set embedID in state?
//log in via state or context?


function Main(props) {
  const [isLoggedIn, setisLoggedIn] = useState(true);
  const [youtubeLink, setYoutubeLink] = useState("G1QjyskJ9jw");
  

  let artist = "George Benson"
  let song = "Breezin'"
 




  if (!isLoggedIn) {
    return <div>Please log in!</div>;
  } else {
    //   if(!youtubeLink) {
    //     return (
    //         <div>Loading, please wait!</div>
    //     )
    //   } else {
    return (
      <div className="main-container">

       <div id="cal-modal">
        <Cal />
       </div>



        <Route exact path="/login"
               render={(props) => <Login {...props} />} />
        <Route exact path="/register"
          render={(props) => <Register {...props} />}/>
        <Route exact path="/"
          render={(props) => <YTE embedId={youtubeLink}  artist={artist} song={song} />}/>



      </div>
    );
  }
}
export default Main;
