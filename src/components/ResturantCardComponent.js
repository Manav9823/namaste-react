const ResturantCard = ({image, Name, City, Stars}) => {
    // console.log(props)
    return(
        <div className= "resturantCard">
            <img className = "logo" alt = "logo" src = {image}></img>
            <h2>{Name}</h2>
            <h4>{City}</h4>
            <h4>{Stars}</h4>
        </div>
    )
}

export default ResturantCard