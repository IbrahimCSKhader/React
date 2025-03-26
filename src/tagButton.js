import "./buttonFirstAssStyle.css"

export default function TagButton(props) {
 return(  <button className="tagButton">
   <h4> {props.value}</h4>
   <p>{props.children}</p>
   
    </button>);
}
