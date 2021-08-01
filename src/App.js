import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";

import React from "react";
import { Element } from "react-scroll";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <div className='app'>
            <Home />
            <NavBar />
            <Element id='projects'>
                <Projects />
            </Element>
            <Element id='contact'>
                <Contact />
            </Element>
            <Footer />
        </div>
    );
}

export default App;
