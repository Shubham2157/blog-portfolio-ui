import "./App.css";
import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Blog from "./components/Blog/BlogList";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/Resume";
import { BrowserRouter as Router, Route,Link, Switch } from "react-router-dom";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "./components/ScrollToTop";
import ReadBlog from "./components/Blog/ReadBlog";
function App() {
  const [load, upadateLoad] = useState(true);
  const [showcomponent,setshowcomponent] = React.useState(false);
 // const [sel,setsel] = React.useState([]);
  const [selected, setselected] = React.useState("");
  useEffect(() => {
    setTimeout(() => {
      upadateLoad(false);
    }, 1200);
  }, []);
  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/project" component={Projects} />
          <Route path="/about" component={About} />
          {/* {showcomponent ?
           <Route path="/blog" component={ReadBlog} /> :
           <Route path="/blog" component={Blog} />
           }  */}
           <Route path="/blog" component={Blog} >
           <Blog selected={selected} setselected={setselected}/>
           </Route>
          
          <Route path="/resume" component={Resume} />
          <Route to ={`/readblog/:${selected}`} >
          <ReadBlog selected={selected}/>
          </Route>
          {/* <Route path={`/:${selected}`} children={<ReadBlog />} /> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
