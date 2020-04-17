import React from 'react';
import Layout from './Components/Layout/View/Layout';
import './App.css';
import homepage from "./Components/Homepage/View/Homepage";
import {HashRouter, Route, Link , Switch} from "react-router-dom";
import about from './Components/About/View/About';
import projects from './Components/Projects/Projects';
import news from './Components/News/View/News';
import contact from './Components/Contact/Contact';
import location2 from "./Components/Location2/Location2";
import projects2 from './Components/Projects2/Projects2';
import location3 from './Components/Locations3/Location3';

function App() {
  return (
      <HashRouter>
          <Switch>
        <Route  exact path="/" component={homepage} />
              <Route  path="/about" component={about} />
              <Route path="/Projects" component={projects} />
              <Route path="/news" component={news} />
              <Route path="/contact" component={contact} />
              <Route path="/location2" component={location2} />
              <Route path="/projects2" component={projects2} />
              <Route path="/location3" component={location3} />
          </Switch>
      </HashRouter>
  );
}

export default App;
