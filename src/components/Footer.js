import React from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Shubham Kumar Jha</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} SKJ</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Shubham2157"
                style={{ color: "white" }}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/Shubham71553131"
                style={{ color: "white" }}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/shubham-kumar-jha-528367191/"
                style={{ color: "white" }}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.facebook.com/subham.kishan.12"
                style={{ color: "white" }}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="tel:+917609048674"
                style={{ color: "white" }}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fas fa-phone"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/kumarjhashubham0000"
                style={{ color: "white" }}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://api.whatsapp.com/send?phone=+917609048674&amp;text=WELCOME"
                target="_blank"
                style={{ color: "white" }}
                rel="noreferrer"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:1830193@kiit.ac.in"
                style={{ color: "white" }}
                target="_blank"
                rel="noreferrer"
              >
                <i className="far fa-envelope"></i>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
