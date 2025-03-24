export default function Article({name,gemail,year}){
    return (
        <div>
            <h1>{name} </h1>
            <h3> {gemail}</h3>
            <h3> {year}</h3>
        </div>
    );
}