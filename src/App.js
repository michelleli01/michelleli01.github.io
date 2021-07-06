import React from "react";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="app">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/portfolio" exact component={Home} />
          <Route path="/projects" component={Projects} />
        </Switch>
        <Footer />
      </Router>
    </div>
    
  );
}

export default App;
