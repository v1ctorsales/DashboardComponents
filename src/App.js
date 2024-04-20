import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from './pages/Layout.jsx';
import SignIn from './pages/SignIn.jsx';

//import SignIn from './pages/SignIn';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/home" component={Layout} />
                    <Route path="/signin" component={SignIn} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
