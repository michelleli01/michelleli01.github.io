import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from './ProjectCard';

import othello from "../../assets/projects/othello.PNG";
import paint from "../../assets/projects/paint.PNG";
import random from "../../assets/projects/random.PNG"

function Projects(){
    return (
        <Container fluid className="project-section">
            <Container className="project-heading">
                <h1>
                    my <strong className="green">PROJECTS</strong>
                </h1>
                <p>
                    Here are a few programs I've worked on throughout the years
                </p>
                <Row style={{ justifyContent: "center", paddingBottom:"10px"}}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                        img={othello}
                        title="Othello"
                        description="Recreated classic game of Othello using Java and GUIs"
                        link="https://github.com/michelleli01/othello"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                        img={paint}
                        title="Network Paint"
                        description="Used Java, GUIs, and socket programming in order to create a painting program that allows clients to connect onto the same server and paint on the same canvas using unique colors"
                        link="https://github.com/michelleli01/network-paint"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                        img={random}
                        title="Random Sampling App"
                        description="Used Java and Android Studio to develop an Android app that allows the user to randomly input their emotions throughout the day. The app will randomly notify the user at random times of the day to fill out the survey and will then save the user's data to the devices sd card."
                        link="https://github.com/michelleli01/random-sampling-app"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;