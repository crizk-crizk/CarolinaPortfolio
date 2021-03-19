import React from "react";
import { Container } from "react-bootstrap";
import Project from "../components/Project";
import projects from "../utils/projects"

const Portfolio = () => {
  return (
    <div id="mywork">
      <Container>
        <h1>My Work</h1>
        {
          projects.map((project, i)=>{
            return <Project key={i} project={project}/>
          })
        }
      </Container>
    </div>
  );
};

export default Portfolio;
