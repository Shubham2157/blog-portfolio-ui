import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./card-style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ProjectCards(props) {
  return (

    <div className="card text-center shadow">
            <div className="overflow">
                <img src={props.imgPath} alt="image1" className="card-img-top" />
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">
                   {props.description}
                </p>                   
        <Button variant="primary" href={props.link} target="_blank">
          <i className="cil-external-link">&nbsp;</i>
          {props.isBlog ? "View Blog" : "View Project"}
        </Button>
            </div>
        </div>
    // <Card className="project-card-view">
    //   <Card.Img variant="top" src={props.imgPath} alt="card-img" />
    //   <Card.Body>
    //     <Card.Title>{props.title}</Card.Title>
    //     <Card.Text style={{ textAlign: "center"}}>
    //       {props.description}
    //     </Card.Text>
    //     <Button variant="primary" href={props.link} target="_blank">
    //       <i className="cil-external-link">&nbsp;</i>
    //       {props.isBlog ? "View Blog" : "View Project"}
    //     </Button>
    //   </Card.Body>
    // </Card>
  );
}
export default ProjectCards;
