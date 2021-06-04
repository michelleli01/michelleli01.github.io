import React, {useState, useEffect} from "react";
import Home from "./components/Home/Home";
import About from "./components/About/About"
import Projects from "./components/Projects/Projects"
import Resume from "./components/Resume/Resume"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/resume" component={Resume} />
      </Switch>
    </Router>
  );
}

export default App;
