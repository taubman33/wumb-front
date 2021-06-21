import React from 'react';
import Nav from './Nav'

function Header(isLoggedIn) {
    return (
        <div className="header-container">
            <div className ="header-text">
               <h1 id="header-title"> WUMB - Listen </h1>
            </div>
            


            <div className="nav-container">
                <Nav isLoggedIn={isLoggedIn}/>
            </div>
        </div>
    );
}

export default Header;