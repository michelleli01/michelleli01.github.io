import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

function Home(){
    return (
        <Container className="home-section">
            <Row>
                <Col md={7} className="home-header">
                    <h1 className="heading">
                    </h1>

                    <h1 className="heading-name">
                        my name is
                        <strong className="green"> MICHELLE LI </strong>
                    </h1>
                </Col>
            </Row>

            <Container fluid className="home-about-section" id="about">
                <Row>
                    <Col md={7} className="home-introduction">
                        <h1>
                            <p className="home-introduction-body">
                                I am a sophmore studying <span className="green">Computer Science</span> at Cornell University
                                <br />
                                <br /> I am proficient in 
                                <i>
                                    <b className="green"> Java and Python </b> 
                                </i> and always eager to learn more!
                                <br /> 
                                <br />
                            </p>
                        </h1>
                    </Col>
                </Row>
            </Container>
        </Container>

        
    );
}

export default Home;