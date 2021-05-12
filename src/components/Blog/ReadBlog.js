import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./read-blog.css";
import ReactMarkdown from "react-markdown";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import ChangingProgressProvider from "./ChangingProgressProvider";

const ReadBlog = (props) => {
  const [Blog, setBlog] = React.useState([]);
  const [isloaded, setisloaded] = React.useState(false);
  let createdat, publishedat, updatedat; 

  //console.log(props.selected);
  //console.log(window.location.href);
  //console.log(window.location.pathname);
  const arr = window.location.pathname.split("/");
  //console.log(arr[2]);
  const get = async () => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}blogs/${arr[2]}`)
      .then((response) => {
        //console.log(response.data);
        setBlog(response.data);
        setisloaded(true);
      });
  };

  React.useEffect(() => {
    get();
  }, []);

  function getdatetime(blogdatetime){
  var localDate = new Date(blogdatetime);
  //console.log(localDate);
  let date = JSON.stringify(localDate)
  date = date.slice(1,11).split('-').reverse().join('/')
  //console.log(date) 
  const time = localDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric',  hour12: true })
  //console.log(time); 
  // https://stackoverflow.com/questions/63569985/how-to-convert-data-yyyy-mm-dd-to-dd-mm-yyyy-in-reactjs
  return  date + " " + time
  
  }

  if(isloaded === true){
    createdat = "CreatedAt " + getdatetime(Blog.createdAt)
    publishedat = "PublishedAt " + getdatetime(Blog.published_at)
    updatedat = "updatedAt " + getdatetime(Blog.updatedAt)
  }

  return (
    <div className="main">
      <div className="container">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">{Blog.title}</h1>
            <p className="lead">{Blog.description}</p>
            <div>
              <p className="lead">{createdat}</p>
              <p className="lead">{publishedat}</p>
              <p className="lead">{updatedat}</p>
            </div>
          </div>
        </div>

        {isloaded === false ? (
          <div className="container-fluid d-flex justify-content-center">
            <div
              style={{
                width: 100,
                height: 100,
                padding: 20,
                justifyContent: "center",
              }}
            >
              <ChangingProgressProvider
                values={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
              >
                {(percentage) => <CircularProgressbar value={percentage} />}
              </ChangingProgressProvider>
            </div>
          </div>
        ) : (
          <img
            src={Blog.cover_image.url}
            alt="cover"
            className="img-thumbnail img-fluid"
            style={{ width: "100%", height: "30rem" }}
          />
        )}

        <div style={{ marginTop: "10vh" }}>
          <ReactMarkdown
            source={Blog.content}
            escapeHtml={false}
            renderers={{ code: Component, image: Image }}
          />
        </div>
      </div>
    </div>
  );
};

const Image = ({ alt, src }) => {
  return (
    <img
      // style={{ height: "35rem", width: "95%", margin: "1rem", justifyContent: "center"}}
      alt={alt}
      src={src}
    />
  );
};

const Component = ({ value, language }) => {
  return (
    <SyntaxHighlighter language={language ?? null} style={dark}>
      {value ?? ""}
    </SyntaxHighlighter>
  );
};

export default ReadBlog;
