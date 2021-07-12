import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home  from '../pages/Home';
import NotFound from '../pages/NotFound'


export default function App() {
    return (
        <BrowserRouter>
            <Switch>    {/* Switch "renderea" al primer hijo Route que haga match con el path */}
                <Route exact path="/home" component={Home}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}


/*const App = () => (
    <BrowserRouter>
        <Switch>    
            <Route exact path="/home" component={Home}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
)

export default App*/

