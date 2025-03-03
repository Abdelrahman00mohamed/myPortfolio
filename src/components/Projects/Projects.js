import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import project1 from "../../Assets/Projects/project1.png";
import project2 from "../../Assets/Projects/project2.png";
import project3 from "../../Assets/Projects/project3.png";
import project4 from "../../Assets/Projects/project4.png";
import project5 from "../../Assets/Projects/project5.png";
import project6 from "../../Assets/Projects/project6.png";
import project7 from "../../Assets/Projects/ecom.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project1}
              class='project1'
              isBlog={false}
              title="CRUD"
              description="CRUD, Managment System,thec  i use  html,css,Bootstrap,js"
              ghLink="https://github.com/Abdelrahman00mohamed/crud-project"
              demoLink="https://abdelrahman00mohamed.github.io/crud-project/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project2}
              isBlog={false}
              title="template1"
              description="template1 from site start bootstap tech iuse Html,Css,bootstrap and js"
              ghLink="https://github.com/Abdelrahman00mohamed/project1"
              demoLink="https://abdelrahman00mohamed.github.io/project1/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project3}
              isBlog={false}
              title="template2"
              description="template2 from site start bootstap tech iuse Html,Css,bootstrap and js"
              ghLink="https://github.com/Abdelrahman00mohamed/template2"
              demoLink=" https://abdelrahman00mohamed.github.io/template2/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project4}
              isBlog={false}
              title="template3"
              description="template3 from site start bootstap tech iuse Html,Css,bootstrap"
              ghLink="https://github.com/Abdelrahman00mohamed/template3"
              demoLink="https://abdelrahman00mohamed.github.io/template3/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project5}
              isBlog={false}
              title="template4"
              description="template4 from site start bootstap tech iuse react.js,react-router-dom,bootstrap"
              ghLink=""
              demoLink="https://template-bootstrap4.netlify.app" />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project6}
             
              title="Trending movies App"
              description="Display trending movies,Tv show and people call Api to get Data tech i use react,axios for Api,react-router-dom and bootstrap"
              ghLink="https://github.com/Abdelrahman00mohamed/Trending-movies"
              demoLink="https://trendingmovies-tv.netlify.app"     
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project7}
             
              title="simple e-commerce App"
              description="this app is a Simple Project e-commerce app useing fake store Api to Display All products tech i use react.js,bootstrap and axios"
              ghLink="https://github.com/Abdelrahman00mohamed/E-commerce"
              demoLink="https://simpleproject-ecommerce.netlify.app"     
            />
          </Col>
      
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
