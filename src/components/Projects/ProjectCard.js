import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCard(props){
    return (
        <Card className="project-card-view">
        <Card.Img variant="top" src={props.img} alt="card-image"/>
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text style={{ textAlign: "justify "}}>{props.description}</Card.Text>
            <Button variant="primary" href={props.link}>
                <BiLinkExternal /> View Project
            </Button>
        </Card.Body>
        </Card>
    );
}

export default ProjectCard;