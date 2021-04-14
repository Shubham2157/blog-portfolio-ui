import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./card-style.css";
import { Link } from "react-router-dom";

const BlogCard = props => {
    console.log(props.sett)
console.log(props.id)

const onbuttonclick = () =>{
    props.setselected(props.id)
    
}
    return(
        <div className="card text-center shadow">
            <div className="overflow">
                <img src={props.imgsrc} alt="image1" className="card-img-top" />
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">
                   {props.description}
                </p>               
                <Link  to ={`/readblog/${props.id}`}>
                <button
                className="btn btn-outline-danger"
                onClick={onbuttonclick}
                > 
                Read Blog
                </button>
                </Link>
            </div>
        </div>
    );
}

export default BlogCard;