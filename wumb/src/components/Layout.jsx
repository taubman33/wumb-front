import React, { useState } from 'react';
import Header from './Header'
import Main from './Main'


function Layout(props) {
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const [youtubeLink, setYoutubeLink] = useState("G1QjyskJ9jw");
  
    return (
        <div>
         <Header isLoggedIn={isLoggedIn}
                 setisLoggedIn={setisLoggedIn}/>

         <Main isLoggedIn={isLoggedIn}
               youtubeLink={youtubeLink}
                /> 
        </div>
    );
}

export default Layout;