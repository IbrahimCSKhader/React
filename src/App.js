import "./App.css";
import Myheader from "./headerComponent";
import Post from "./post";
import Side from "./SideMenue";

function App() {
  return (
    <div className="App">
      <Myheader />
<div style={{display:"flex", justifyContent:"center"}} > 
      <div style={{ display: "flex",width:"60%"}}>
        <div style={{ width: "80%" }}>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>

        <div style={{width:"30%"}}> 
         <Side/>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
