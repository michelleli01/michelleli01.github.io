import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { BiHomeCircle, BiUser, BiFile } from "react-icons/bi";
import { AiOutlineProject} from "react-icons/ai";

function NavBar(){
    const [expand, updateExpanded] = useState(false);

    return (
        <Navbar expanded={expand}
        fixed="top"
        expand="md"
        className="navbar">
            <Container>
                <Navbar.Brand href="/">
                    {/* insert logo */}
                </Navbar.Brand>
                <Navbar.Toggle 
                    aria-controls="responsive-navbar-nav"
                    onClick={() => {
                        updateExpanded(expand ? false : "expanded");
                }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="response-navbar-nav">
                    <Nav className="mr-auto" defaultActiveKey="#home">
                        <Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={ Link } to="/" onClick={() => updateExpanded(false)}>
                                    <BiHomeCircle style={{ marginBottom: "2px"}}/> Home
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={ Link } to="/about" onClick={() => updateExpanded(false)}>
                                    <BiUser style={{ marginBottom: "2px"}} /> About
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={ Link } to="/projects" onClick={() => updateExpanded(false)}>
                                    <AiOutlineProject style={{ marginBottom: "2px"}}/> Projects
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={ Link } to="/resume" onClick={() => updateExpanded(false)}>
                                    <BiFile style={{ marginBottom: "2px"}}/> Resume
                                </Nav.Link>
                            </Nav.Item>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;