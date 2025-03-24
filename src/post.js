import  "./Poststyle.css"
export default function Post(props){
    if(props.content==""){
        props.content="defult"
    }
    return (
        <div className={"contPost"} >
     
            <h3>{props.title}</h3>
            <hr></hr>
            <h4>{props.body}</h4>
            <h4>{props.content}</h4>
      
        </div>
    );
}