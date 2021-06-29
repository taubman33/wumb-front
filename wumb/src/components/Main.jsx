import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import YTE from "./Youtubeembed";
import EmbedContainer from "./EmbedContainer";
import Home from "./Home"
import Login from "../forms/Login";
import Register from "../forms/Register";
import Table2 from "./Table2"


function Main(isLoggedIn, youtubeLink) {


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


     
      {/* <div className="main">
        <Route exact path="/login"
               render={(props) => <Login {...props} />} />
        <Route exact path="/register"
          render={(props) => <Register {...props} />}/>
        <Route exact path="/player"
          render={(props) => <EmbedContainer embedId={youtubeLink} />}/>
        <Route exact path="/" component={Home}/>
    </div> */}

    <Table2 />

      </div>
    );
  }
}
export default Main;
