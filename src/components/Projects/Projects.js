import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import stopwatch from "../../Assets/Projects/stopwatch.avif";
import game from "../../Assets/Projects/game.jpg";
import travel from "../../Assets/Projects/travel.jpg";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          PROJECTS
        </h1>
        <p style={{ color: "white" }}>
        Check out my work—real-world projects that reflect my journey in web development.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travel}
              isBlog={false}
              title="Responsive Travel Website"
              description="Discover, plan, and explore with ease on a fully responsive travel website."
              ghLink="https://github.com/JeenaAanchal/TravelWebsite"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stopwatch}
              isBlog={false}
              title="Stopwatch Application"
                  
              description="Track time effortlessly with a sleek and responsive stopwatch app!"
              ghLink="https://github.com/JeenaAanchal/Stopwatch-Application"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={game}
              isBlog={false}
              title="Tic-Tac-Toe"
              description="Bring back the nostalgia with our classic Tic-Tac-Toe app!"
              ghLink="https://github.com/JeenaAanchal/Tic-Tac-Toe"
                          
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
