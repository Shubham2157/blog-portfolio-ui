import React from "react";
import Card from "react-bootstrap/Card";
import imgsrc from "../../Assets/my.jpg";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <img src={imgsrc} className="img-fluid" />
          <p style={{ textAlign: "center" }}>
            Hi Everyone, I am <span className="purple">Shubham Kumar Jha </span>
            from <span className="purple">Jamtara Jharkhand, India.</span>
            <br />
            Currently I am pursuing BTECH in KIIT University Bhubaneswar.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Cooking
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Make Your Code like cow (Simple + understandable)"
          </p>
          <footer className="blockquote-footer">Shubham Kumar Jha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
