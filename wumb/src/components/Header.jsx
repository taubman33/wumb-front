import React from 'react';
import Nav from './Nav'

function Header(props) {
    return (
        <div className="header-container">
            <div className ="header-text">
               <h1 id="header-title"> WUMB - Listen </h1>
            </div>
            


            <div className="nav-container">
                <Nav/>
            </div>
        </div>
    );
}

export default Header;