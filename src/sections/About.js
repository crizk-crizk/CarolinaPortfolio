import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

const About = () => {
  const [size, setSize] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setSize(window.innerWidth);

    });
  }, []);
  const iconSize = size < 800 ? "4x" : "10x";
  const iconClass = size < 755 ? "iconsSmallScreen" : "icons";
  return (
    <div id="about">
      <Container>
        <Row>
          <Col sm={12} md={6}>
            <h1>Hello, I'm Carolina </h1>
            <p>
              a New York City-based full-stack developer. I create beautiful and
              functional websites for small businesses.
            </p>
          </Col>
          <Col sm={12} md={6}>
            <img className="face" src="/images/face.jpeg" alt="face" />
          </Col>
        </Row>
{/* -------------------------- */}
        <Row className={iconClass} >
          <Col className="contactIcon" sm={4} md={4}>
            <a
              href="http://linkedin.com/in/carolina-rizk"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                color="pink"
                size={iconSize}
                icon={faLinkedinIn}
              />
            </a>
          </Col>
          <Col className="contactIcon" sm={4} md={4}>
            <a
              href="http://github.com/crizk-crizk"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon color="pink" size={iconSize} icon={faGithub} />
            </a>
          </Col>
          <Col className="contactIcon" sm={4} md={4}>
            <a
              href="https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:daf610b8-fcd4-457b-ac7d-dc7d750d44d3"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon color="pink" size={iconSize} icon={faFile} />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
