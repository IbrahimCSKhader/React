import "./App.css";
import Myheader from "./headerComponent";
import Articl from "./Articl";
import Post from "./post";
import Side from "./SideMenue";
const firstPost=
`sdfl;pjsdDGj
sadg;lsjfg
s
fpfogksfgo[k
sGvs
ogvS
GS
vSv]`;
const secoundtPost=`sagf;kjsdg
s;glmsGl;m
sg`;

function App() {
  return (
    <div className="App">
      <Myheader />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ display: "flex", width: "60%" }}>
          <div style={{ width: "80%" }}>
            <Post
              title="React Book"
              body="This is a good book to learn React."
            />
            <Post 
              content={firstPost}
              title="JavaScript Guide"
              body="A comprehensive guide to JavaScript programming."
            />
            <Post
              title="Web Development"
              body="Learn how to build modern web applications."
            />
            <Post
              title="CSS Mastery"
              body="Enhance your styling skills with advanced CSS techniques."
            />
            <Post
              title="Node.js Essentials"
              body="Understand backend development using Node.js."
            />
            <Post
              title="MongoDB Basics"
              body="Get started with NoSQL databases and MongoDB."
            />
            <Post
              title="Frontend Frameworks"
              body="Explore React, Vue, and Angular for UI development."
            />
            <Post
              title="Backend with Express"
              body="Learn how to build APIs using Express.js."
            />
            <Post
              title="Full-Stack Development"
              body="Combine frontend and backend to build full projects."
            />
            <Post
              title="Deployment Strategies"
              body="Deploy your applications using modern DevOps techniques."
            />
            <Post
              title="Testing in React"
              body="Understand unit and integration testing in React apps."
            />
          </div>

          <div style={{ width: "30%" }}>
            <Side />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
