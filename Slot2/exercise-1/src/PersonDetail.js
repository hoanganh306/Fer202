function PersonDetail(props){
    return(
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Occupation: {props.occupation}</p>
        </div>
    )
}
export default PersonDetail