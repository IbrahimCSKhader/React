import "./App.css";
import Myheader from "./headerComponent";
import Articl from "./Articl";
import Post from "./post";
import Side from "./SideMenue";

const show = true;

function App() {
  const posts = [
    { id: 1, title: "React Book", body: "This is a good book to learn React." },
    { id: 2, title: "JavaScript Guide", body: "A comprehensive guide to JavaScript programming." },
    { id: 3, title: "Web Development", body: "Learn how to build modern web applications." },
    { id: 4, title: "CSS Mastery", body: "Enhance your styling skills with advanced CSS techniques." },
    { id: 5, title: "Node.js Essentials", body: "Understand backend development using Node.js." },
    { id: 6, title: "MongoDB Basics", body: "Get started with NoSQL databases and MongoDB." },
    { id: 7, title: "Frontend Frameworks", body: "Explore React, Vue, and Angular for UI development." },
    { id: 8, title: "Backend with Express", body: "Learn how to build APIs using Express.js." },
    { id: 9, title: "Full-Stack Development", body: "Combine frontend and backend to build full projects." },
    { id: 10, title: "Deployment Strategies", body: "Deploy your applications using modern DevOps techniques." },
    { id: 11, title: "Testing in React", body: "Understand unit and integration testing in React apps." }
  ];

  console.log(posts);

  const myPostsList = posts.map((post) => (
    <Post key={post.id} title={post.title} body={post.body} />
  ));

  return (
    <div className="App">
      <Myheader />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ display: "flex", width: "60%" }}>
          <div style={{ width: "80%" }}>
            {myPostsList} 
          </div>
          <div style={{ width: "30%" }}>
            <AppSideMenue />
          </div>
        </div>
      </div>
    </div>
  );
}

function AppSideMenue() {
  if (show) {
    return <Side />;
  } else {
    return <div>No side</div>;
  }
}

export default App;
