import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { BiHomeCircle, BiFile } from "react-icons/bi";
import { AiOutlineProject} from "react-icons/ai";

function NavBar(){

    return (
        <Navbar
        fixed="top"
        expand="lg"
        className="navbar">
            <Container>
                <Navbar.Brand href="/">
                    Michelle Li
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="response-navbar-nav">
                    <Nav className="mr-auto" defaultActiveKey="#home">
                        <Nav.Link as={ Link } to="/">
                            <BiHomeCircle /> Home
                        </Nav.Link>
                        <Nav.Link as={ Link } to="/projects" >
                            <AiOutlineProject /> Projects
                        </Nav.Link>                    
                        <Nav.Link as={ Link } to="/resume">
                            <BiFile /> Resume
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;