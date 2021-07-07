import React, { useState } from 'react';
import Header from './Header'
import Main from './Main'

//basic layout component, site divided into Header (w Navbar) and Main (w everything else)
//basic now but as we continue on this I have a feeling this is going to be filled up a lot more
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