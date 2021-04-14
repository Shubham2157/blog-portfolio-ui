import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import axios from "axios";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Projects() {

  const [Project, setProject] = React.useState([]);

  const get = () =>{
    axios.get(`${process.env.REACT_APP_BASE_URL}projects/`)
    .then(response =>{
         console.log(response.data);
        setProject(response.data)
    })

} 
React.useEffect(() => {
    get(); 
},[]) 


  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
          {Project.map((item, index) =>{
                          
                          return(
            <ProjectCard
              imgPath={item.cover.url}
              isBlog={false}
              title={item.title}
              description={item.description}
              link={item.link}
            />
             )
                          })}
          </Col>
        </Row>
       
      </Container>
    </Container>
  );
}

export default Projects;
