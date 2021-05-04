function Fun(props){
    // console.log(props);
return(
    <div id="container">
        <div id="content">
            <img src={props.imgsrc} alt="Image" width="600px"/>
            <h3>{props.name}</h3>
            <p>Description</p>
        </div>
    </div>

)
}

export default Fun;