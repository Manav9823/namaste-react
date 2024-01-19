// import './style.css'
import '../../style.css'
import { Link, useParams } from 'react-router-dom'

const ResturantCard = ({image, Name, areaName, Stars, id}) => {
    // console.log(props)
    const {resId}  = useParams()
    // console.log(resId)
    return(
        <div class="bg-slate-200 rounded-xl">
            <img class="rounded-xl" className = "logo" alt = "logo" src = {image}></img>
            <Link to={"/restaurants/" + id}   >
                <h1 class="font-bold ml-2">{Name}</h1>
                <h4 class=" ml-2 font-extralight">{areaName}</h4>
                <h4 class="ml-2">{Stars}</h4>
            </Link>
        </div>
    )
}

export default ResturantCard