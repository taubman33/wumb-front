import React from 'react';
import { Route } from 'react-router-dom'
import YTE from './Youtubeembed'
import Login from '../forms/Login'
import Register from '../forms/Register'


//fetch call here?
//set embedID in state?


function Main(props) {
    return (
        <div>

<Route exact path='/login' render={(props) => <Login {...props} />} />
<Route exact path='/register' render={(props) => <Register {...props} />} />
       <YTE embedId="G1QjyskJ9jw" />
        </div>
    );
}

export default Main;