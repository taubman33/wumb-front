import React from 'react';
import Header from './Header'
import Main from './Main'
import Nav from './Nav'
import Login from '../forms/Login'
import Register from '../forms/Register'


function Layout(props) {
    return (
        <div>
         <Header/>
         <Main/>  
         <Nav/> 
         <Login/> 
         <Register/>
        </div>
    );
}

export default Layout;