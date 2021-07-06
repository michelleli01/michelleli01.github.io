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
                <Navbar.Brand href="/portfolio">
                    Michelle Li
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="response-navbar-nav">
                    <Nav className="mr-auto" defaultActiveKey="#home">
                        <Nav.Link as={ Link } to="/portfolio">
                            <BiHomeCircle /> Home
                        </Nav.Link>
                        <Nav.Link as={ Link } to="/projects" >
                            <AiOutlineProject /> Projects
                        </Nav.Link>                    
                        <Nav.Link onClick={()=> window.open("https://drive.google.com/file/d/1qbOu9RK86xYTpTR5VBESJH1afOY4CJfc/view?usp=sharing", "_blank")}>
                            <BiFile /> Resume
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;