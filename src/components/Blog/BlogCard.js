import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./card-style.css";
import ReadBlog from "./ReadBlog";
import { BrowserRouter as Router, Route,Link, Switch } from "react-router-dom";


const BlogCard = props => {
    console.log(props.sett)
console.log(props.id)
 //const [showcomponent,setshowcomponent] = React.useState(false);

 

const onbuttonclick = () =>{
    //setshowcomponent(true);
    props.sett(false);
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
                {/* <a href="#" className="btn btn-outline-success">Read Blog</a> */}
               
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