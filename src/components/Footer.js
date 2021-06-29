import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FiGithub } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

function Footer(){
    
    return (
        <Container fluid className="footer">
            <Row>
                <Col md="4" className="footer-copyright">
                    <h3>Designed and Developed by Michelle Li </h3>
                </Col>
                
                <Col md="4" className="footer-body">
                    <div className="social-icons">
                        <a href="https://github.com/michelleli01"><FiGithub/></a>
                        <a href="https://www.linkedin.com/in/michelle-li-0342951a9/"><FaLinkedin/></a>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;