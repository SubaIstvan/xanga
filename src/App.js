import React from 'react';
import './App.css';
import homepage from "./Components/Homepage/View/Homepage";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={homepage}/>
            </Switch>
        </Router>
    );
}

export default App;
