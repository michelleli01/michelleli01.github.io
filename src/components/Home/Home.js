import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import michelle from "../../assets/michelle.jpg";

import "./Home.css";

function Home() {
    return (
        <Container className='home-section'>
            <Row>
                <Col md={7} className='home-header'>
                    <h1 className='heading-name'>
                        my name is
                        <strong className='green'> MICHELLE LI </strong>
                    </h1>
                    <div style={{ textAlign: "center" }}>
                        <b>CS @ Cornell</b>
                    </div>
                </Col>
            </Row>

            <Container fluid className='home-about-section' id='about'>
                <Row>
                    <Col md={7} className='home-introduction'>
                        <h1>
                            <p className='home-introduction-body'>
                                Hi! I'm Michelle, a sophomore studying{" "}
                                <span className='green'>Computer Science</span>{" "}
                                at Cornell University in the College of
                                Engineering
                                <br />
                                <br />
                                <div className='home-main-body'>
                                    I am interested in utilizing
                                    <i>
                                        <b className='green bold'>
                                            {" "}
                                            software development and data
                                            science{" "}
                                        </b>
                                    </i>{" "}
                                    to help alleviate some of the many social
                                    issues we face today.
                                    <br />
                                    <br />
                                    Outside of academics I love listening to
                                    music and riding my longboard. I plan on
                                    using this site as a portfolio to store all
                                    the projects I've worked on over the years.
                                    <br />
                                    <br />I am currently looking for a Summer
                                    2022 role related to software development
                                    and/or data science. If you know of any open
                                    positions please feel free to{" "}
                                    <a href='mailto:myl39@cornell.edu'>
                                        reach out
                                    </a>
                                    !
                                </div>
                                <br />
                                <br />
                            </p>
                        </h1>
                    </Col>
                    <Col md={4}>
                        <img
                            src={michelle}
                            alt='michelle'
                            className='img-fluid'
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Home;
