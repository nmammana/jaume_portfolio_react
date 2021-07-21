import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home  from '../pages/Home';
import NotFound from '../pages/404'


export default function App() {
    return (
        <BrowserRouter>
            <Switch>    {/* Switch "renderea" al primer hijo Route que haga match con el path */}
                <Route exact path="/" component={Home}/>
                <Route component={NotFound}/>    
            </Switch>
        </BrowserRouter>
    )
}
