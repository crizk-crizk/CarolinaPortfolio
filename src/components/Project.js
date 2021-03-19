import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const Project = ({ project }) => {
  return (
    <Row>
      <Col sm={12} md={6}>
        <img style={{ width: "100%" }} src={project.image} />
      </Col>
      <Col sm={12} md={6}>
        <Card>
          <Card.Title>{project.title}</Card.Title>
          <Card.Body>
            <Card.Text>
              {project.tech.map((techItem) => {
                return <span>{techItem}</span>;
              })}
            </Card.Text>
            <Card.Text>{project.description}</Card.Text>
            <Card.Text>
              <a href={project.github}> GitHub</a>
              <a href={project.deployed}> Live Site</a>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Project;
