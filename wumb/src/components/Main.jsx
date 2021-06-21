import React, { useState } from "react";
import { Route } from "react-router-dom";
import YTE from "./Youtubeembed";
import Login from "../forms/Login";
import Register from "../forms/Register";
import Cal from "../assets/CalendarReact";

//fetch call here?
//set embedID in state?
//log in via state or context?


function Main(props) {
  const [isLoggedIn, setisLoggedIn] = useState(true);
  const [youtubeLink, setYoutubeLink] = useState("G1QjyskJ9jw");


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
        <Cal />
        <Route exact path="/login"
               render={(props) => <Login {...props} />} />
        <Route exact path="/register"
          render={(props) => <Register {...props} />}/>
        <Route exact path="/"
          render={(props) => <YTE embedId={youtubeLink} />}/>
      </div>
    );
  }
}
export default Main;
