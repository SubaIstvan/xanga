import React from 'react';
import Layout from './Components/Layout/View/Layout';
import './App.css';
import homepage from "./Components/Homepage/View/Homepage";
import { BrowserRouter as Router, Route, Link , Switch} from "react-router-dom";
import about from './Components/About/View/About';

function App() {
  return (
      <Router>
          <Switch>
        <Route  exact path="/" component={homepage} />
              <Route  path="/about" component={about} />
          </Switch>
      </Router>
  );
}

export default App;
