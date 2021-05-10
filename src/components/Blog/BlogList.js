import React from "react";
import Card from "./BlogCard";
import Particle from "../Particle";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../Navbar";
import ReadBlog from "./ReadBlog";
import ChangingProgressProvider from "./ChangingProgressProvider";
import { CircularProgressbar ,buildStyles} from 'react-circular-progressbar';

const Blogs = (props) => {
  const [Blog, setBlog] = React.useState([]);
  const [t, sett] = React.useState(false);
  const get = async() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}blogs/`).then((response) => {
      setBlog(response.data);
      sett(true);
    });
  };
  React.useEffect(() => {
    get();
  }, []);

  return (
    <div>
      <div className="main-head">
          <Particle />
          <h1 className="project-heading">
            My Recent <strong className="purple">Blog </strong> Posts
          </h1>
          <p style={{ color: "white" }}>Do give a read to some of my blogs</p>

      {t ? (
        
          <div className="container-fluid d-flex justify-content-center">
            <div className="row">
              {Blog.map((item, index) => {
                //console.log(item.cover_image.url);
                return (
                  <div className="col-md-4">
                    <Card
                      sett={sett}
                      id={item.id}
                      imgsrc={item.cover_image.url}
                      title={item.title}
                      description={item.description}
                      selected={props.selected}
                      setselected={props.setselected}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        
      ) : (
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
      )}
    </div>
    </div>
  );
};

export default Blogs;
