import React from "react";
import { Card } from "react-bootstrap";

const Project = ({ project }) => {
  return (
    <Card>
      <Card.Title>{project.title}</Card.Title>
      <Card.Body>
        <Card.Text>
          {project.tech.map((techItem) => {
            return <span>{techItem}</span>;
          })}
          ;
        </Card.Text>
        <Card.Text>
          <a href={project.github}> GitHub</a>
          <a href={project.deployed}> Live Site</a>
        </Card.Text>
      </Card.Body>

      <Card.Img style={{ width: "150px" }} src={project.image} />
    </Card>
  );
};

export default Project;
