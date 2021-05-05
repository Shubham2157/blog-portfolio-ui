import React from "react";
import { Container } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import ChangingProgressProvider from "../Blog/ChangingProgressProvider";
import { CircularProgressbar ,buildStyles} from 'react-circular-progressbar';


function Projects() {

  const [Project, setProject] = React.useState([]);
  const [t, sett] = React.useState(false);

  const get = () =>{
    axios.get(`${process.env.REACT_APP_BASE_URL}projects/`)
    .then(response =>{
        //  console.log(response.data);
        setProject(response.data)
        sett(true);

    })

} 
React.useEffect(() => {
    get(); 
},[]) 


  return (
    <div>
      <div className="main-head">
    {/* <Container fluid className="project-section"> */}
      <Particle />
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        {t?(
          <div className="container-fluid d-flex justify-content-center">
            <div className="row">
          {Project.map((item, index) =>{              
            return(
            <div className="col-md-4">
            <ProjectCard
              imgPath={item.cover.url}
              isBlog={false}
              title={item.title}
              description={item.description}
              link={item.link}
            />
            </div>

             )
            })}
            </div>
          </div>
        ):(
          <div className="container-fluid d-flex justify-content-center">  
          <div style={{ width: 150, height: 150, padding:20, justifyContent:"center"}}>
          <ChangingProgressProvider values={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}>
      {percentage => (
        <CircularProgressbar value={percentage}  styles={buildStyles({
          pathColor: "rgb(23, 23, 23)",
          trailColor: "#DC3545"
        })}/>
      )}
    </ChangingProgressProvider>
          </div>
          </div>
        )
 }
       
     
    </div>
    </div>
  );
}

export default Projects;
