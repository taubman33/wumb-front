import React, { useState } from "react";
import { Route } from "react-router-dom";
import YTE from "./Youtubeembed";
import Home from "./Home"
import Login from "../forms/Login";
import Register from "../forms/Register";
import Cal from "./CalContainer";


function Main(isLoggedIn, youtubeLink) {


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

      <div className="main">
        <Route exact path="/login"
               render={(props) => <Login {...props} />} />
        <Route exact path="/register"
          render={(props) => <Register {...props} />}/>
        <Route exact path="/player"
          render={(props) => <YTE embedId={youtubeLink}  artist={artist} song={song} />}/>
        <Route exact path="/" component={Home}/>
    </div>


      </div>
    );
  }
}
export default Main;
