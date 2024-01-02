import './style.css'
import { Link, useParams } from 'react-router-dom'

const ResturantCard = ({image, Name, areaName, Stars, id}) => {
    // console.log(props)
    const {resId}  = useParams()
    console.log(resId)
    return(
        <div className= "resturantCard">
            <img className = "logo" alt = "logo" src = {image}></img>
            <Link to={"/restaurants/" + id}   >
                <h2>{Name}</h2>
                <h4>{areaName}</h4>
                <h4>{Stars}</h4>
            </Link>
        </div>
    )
}

export default ResturantCard