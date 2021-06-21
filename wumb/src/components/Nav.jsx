import React from 'react';
import { Link } from 'react-router-dom'


function Nav(props) {

    let loggedin = false
    let username = "JT33"
    if (!loggedin){
        return (
            <div className ="nav">
             <Link to="/"> <h3 id="nav-link"> Home </h3> </Link>
             <Link to="/login"> <h3 id="nav-link"> Log In </h3></Link>
             <Link to="/register"> <h3 id="nav-link"> Create Account </h3> </Link>
            </div>
        );
    }else {
    return (
        <div className ="nav">
         <Link to="/"> <h3 id="nav-link"> Home </h3> </Link>
         <h3 id="nav-link"> Welcome {username}!</h3>
        </div>
    );
}
}

export default Nav;