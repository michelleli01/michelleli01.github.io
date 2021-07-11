import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FiGithub } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

import './Footer.css';

function Footer(){
    
    return (
        <Container fluid className="footer">
            <Row>
                <Col md="4" className="footer-copyright">
                    <h3>Designed and Developed by Michelle Li</h3>
                    <h3>Built from scratch with React, JavaScript, HTML5, and CSS3</h3>
                    
                </Col>
                
                <Col md="4" className="footer-body">
                    <div className="social-icons">
                        <a href="https://github.com/michelleli01"><FiGithub/></a>
                        <a href="https://www.linkedin.com/in/michelle-li-0342951a9/"><FaLinkedin/></a>
                    </div>
                </Col>

                <Col md="4" className="footer-contact">
                    <h3>301-250-0346</h3>
                    <h3>michelleyli123@gmail.com</h3>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;