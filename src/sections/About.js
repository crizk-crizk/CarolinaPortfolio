import React from "react";
import { Row, Col } from "react-bootstrap";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <div id="about">
      <Container>
        <Row>
          <Col sm={12} md={6} >
            <h1>Hello, I'm Carolina </h1>
            <p>
              a New York City-based full-stack developer. I create beautiful and
              functional websites for small businesses.
            </p>
          </Col>
          <Col sm={12} md={6} >
            <img className="face" src="/images/face.jpeg" alt="face" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
