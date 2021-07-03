import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import michelle from "../../assets/michelle.jpg"

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
                    <div style={{textAlign:'center'}}><b>CS @ Cornell</b></div>
                    
                </Col>
            </Row>

            <Container fluid className="home-about-section" id="about">
                <Row>
                    <Col md={7} className="home-introduction">
                        <h1>
                            <p className="home-introduction-body">
                                Hi! I'm Michelle, a sophmore studying <span className="green">Computer Science</span> at Cornell University
                                <br />
                                <br /> 
                                <div className="home-main-body">
                                I am interested in 
                                <i>
                                    <b className="green"> software development </b> 
                                </i> and utilizing technology to make people's lives easier.
                                <br /> 
                                <br />
                                Outside of academics I love listening to music and riding my longboard.</div>
                                <br />
                                <br />
                                </p>
                        </h1>
                    </Col>
                    <Col md={4}>
                        <img src={michelle} alt="michelle" className="img-fluid"/>
                    </Col>
                </Row>
            </Container>
        </Container>

        
    );
}

export default Home;