import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import pdf from "../../Assets/ShubhamKumarJhaResume.pdf";

function Resume() {
  
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            {/* <h3 className="resume-title">Experience</h3>

             <Resumecontent
              title="Summer Intern at HighRadius"
              date="Janurary 2021 - March 2021"
              content={[
                "Developed a full stack Sales Order Management System application.",
                "Used Java and React Js for this project"
               
              ]}
            /> */}

            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Web Development"
              content={[
                "From E-Labs KIIT"
              ]}
            />
            <Resumecontent
              title="Android Development"
              content={[
                "From E-Labs KIIT"
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="B.Tech | KIIT University Bhubaneswar"
              date="2018 - Present"
              content={[`CGPA: 8.41 (Till 5th Sem)`]}
            />
            <Resumecontent
              title="12TH BOARD | S.D. DAV Public School Jamtara"
              date="2016 - 2018"
              content={["Precentage: 77.8%"]}
            />
            <Resumecontent
              title="10TH BOARD | S.D. DAV Public School Jamtara "
              date="2016"
              content={["CGPA: 9.2"]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download Resume
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
