import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from './pages/LandingPage';
import Contact from './pages/Contact';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import ButtonAppBar from './components/AppBar';


class App extends Component {
  render() {
    return (
        <div>
        {/* // don't need anything outside of the routes */}
        <ButtonAppBar />
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/resume" component={Resume} /> 
            {/* determines what component is routed to.
            below route (NoMatch) would be 404*/}
            
          </Switch> 
        </Router>
        {/* <Footer /> */}
      </div>
    )
  }
}

export default App;
