import React, { useState } from 'react';
import Header from './Header'
import Main from './Main'


function Layout() {
    const [isLoggedIn, setisLoggedIn] = useState(true);
    // const [youtubeLink, setYoutubeLink] = useState("G1QjyskJ9jw");

    return (
        <div>
         <Header isLoggedIn={isLoggedIn}
                 setisLoggedIn={setisLoggedIn}/>

         <Main isLoggedIn={isLoggedIn}
                /> 
        </div>
    );
}

export default Layout;