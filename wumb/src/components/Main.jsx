import React from "react";
import { Route } from "react-router-dom";
import EmbedContainer from "./EmbedContainer";
import Home from "./Home"
import Login from "../forms/Login";
import Register from "../forms/Register";


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

 <div className="main">
        <Route exact path="/login"
               render={(props) => <Login {...props} />} />
        <Route exact path="/register"
          render={(props) => <Register {...props} />}/>
        <Route exact path="/player"
          render={(props) => <EmbedContainer embedId={youtubeLink} />}/>
        <Route exact path="/" component={Home}/>
    </div>
  

      </div>
    );
  }
}
export default Main;
