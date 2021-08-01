import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCard(props) {
    return (
        <Card className='project-card-view' >
            <video
                poster={props.img}
                onMouseOver={(event) => event.target.play()}
                onMouseOut={(event) => event.target.pause()}
                src={props.video}
            />
            <Card.Body>
                <Card.Title className='project-card-title'>
                    {props.title}
                </Card.Title>
                <Card.Text
                    className='project-card-body'
                    style={{ textAlign: "justify " }}
                >
                    {props.description}
                </Card.Text>
                <style type='text/css'>
                    {`
                    .btn-primary{
                        color: white;
                        background-color: darkseagreen;
                        border-color: darkseagreen;
                    }
                    
                    .btn-primary:hover{
                        color: white;
                        background-color: darkslategray;
                        border-color: rgb(100, 131, 100);
                    }
                `}
                </style>
                <Button
                    variant='primary'
                    href={props.link}
                    className='btn-primary'
                >
                    <BiLinkExternal /> GitHub
                </Button>
            </Card.Body>
        </Card>
    );
}

export default ProjectCard;