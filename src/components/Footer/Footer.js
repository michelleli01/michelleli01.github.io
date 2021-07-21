import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

import "./Footer.css";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copyright">
          <h3>Designed and Developed by Michelle Li</h3>
          <h3>Built from scratch with React, JavaScript, HTML5, and CSS3</h3>
        </Col>

        <Col md="4" className="footer-body">
          <a href="https://github.com/michelleli01">
            <AiFillGithub size={"25px"}/>
          </a>
          <a href="https://www.linkedin.com/in/michelleli0/">
            <AiFillLinkedin size={"25px"}/>
          </a>
        </Col>

        <Col md="4" className="footer-contact">
          <h3>301-250-0346</h3>
          <h3>myl39@cornell.edu</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
