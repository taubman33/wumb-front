import React from 'react';
import Header from './Header'
import Main from './Main'
import Nav from './Nav'

function Layout(props) {
    return (
        <div>
         <Header/>
         <Main/>  
         <Nav/>  
        </div>
    );
}

export default Layout;