import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link, animateScroll as Scroll } from "react-scroll";
import { BiHomeCircle, BiFile } from "react-icons/bi";
import { AiOutlineProject } from "react-icons/ai";
import { AiOutlineContacts } from "react-icons/ai";

import "./NavBar.css";

function NavBar() {
    return (
        <Navbar fixed='top' expand='lg' className='navbar'>
            <Container>
                <Navbar.Brand
                    onClick={() => {
                        Scroll.scrollToTop();
                    }}
                    className='link'
                    to='/'
                >
                    michelle.
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='response-navbar-nav'>
                    <Nav className='mr-auto' defaultActiveKey='#home'>
                        <Link
                            onClick={() => {
                                Scroll.scrollToTop();
                            }}
                            className='link'
                            to='/'
                        >
                            <BiHomeCircle /> home.
                        </Link>
                        <Link
                            className='link'
                            to='projects'
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                        >
                            <AiOutlineProject /> projects.
                        </Link>
                        <Link
                            className='link'
                            to='contact'
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                        >
                            <AiOutlineContacts  size="1.2em" /> contact.
                        </Link>
                        <Link
                            onClick={() =>
                                window.open(
                                    "https://drive.google.com/file/d/1qbOu9RK86xYTpTR5VBESJH1afOY4CJfc/view?usp=sharing",
                                    "_blank"
                                )
                            }
                            className='link'
                        >
                            <BiFile/> resume.
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
