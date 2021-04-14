import React from "react";
import Card from "./BlogCard";
import Particle from "../Particle";
import axios from "axios";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Navbar from "../Navbar";
import ReadBlog from "./ReadBlog";

const Blogs = (props) => {
  const [Blog, setBlog] = React.useState([]);
  const [t, sett] = React.useState(true);
  const get = () => {
    axios.get(`${process.env.REACT_APP_BASE_URL}blogs/`).then((response) => {
      setBlog(response.data);
    });
  };
  React.useEffect(() => {
    get();
  }, []);

  return (
    <div>
      {t ? (
        <div className="main-head">
          <Particle />
          <h1 className="project-heading">
            My Recent <strong className="purple">Blog </strong> Posts
          </h1>
          <p style={{ color: "white" }}>Do give a read to some of my blogs</p>

          <div className="container-fluid d-flex justify-content-center">
            <div className="row">
              {Blog.map((item, index) => {
                console.log(item.cover_image.url);
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
        </div>
      ) : (
        <Router>
          <Navbar />
          <Switch>
            <Route path="/readblog" component={ReadBlog}>
            </Route>
          </Switch>
        </Router>
      )}
    </div>
  );
};

export default Blogs;
