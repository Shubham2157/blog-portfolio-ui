import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import homeLogo from "../../Assets/PreetAnurag.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { BrowserRouter as Router, Route,Link, Switch,useParams } from "react-router-dom";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              {/* <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There! 
              </h1> */}

              <h1 className="heading-name">
                println(" HELLO THERE <span className="wave">👋🏻</span> ")
                <strong className="main-name"> I'M 𝒮𝒽𝓊𝒷𝒽𝒶𝓂 𝒦𝓊𝓂𝒶𝓇 𝒥𝒽𝒶 </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            {/* <Col md={3} style={{ paddingBottom: 10 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col> */}
          </Row>
        </Container>
      </Container>
      {/* <Home2 /> */}
      <Link to="/about">
      <button className="btn btn-primary" style={{marginBottom:"80px"}}>Know More</button>
      </Link>
    </section>
  );
}

export default Home;
