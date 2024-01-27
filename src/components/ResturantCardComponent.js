// import './style.css'
import '../../style.css'
import { Link, useParams } from 'react-router-dom'

const ResturantCard = ({image, name, areaName, Stars, id, time, cuisines}) => {
    // console.log(props)
    const {resId}  = useParams()
    // console.log(resId)
    return(
        <div>
            <div>
             <img class="rounded-2xl w-full" className = "logo" alt = "logo" src = {image}></img>
            </div>
            <div>
                <Link to={"/restaurants/" + id}>
                <h1 class="font-bold text-xl">{name}</h1>
                <div class="flex">
                    <h4 class="text-bold">⭐ {Stars} : </h4>
                    <h4 class="text-bold ml-2">{time}</h4>
                </div>
                <h4 class="text-gray-400">{cuisines}</h4>
                <h4 class=" font-extralight">{areaName}</h4>
                </Link>
            </div>
        </div>
    )
}

export default ResturantCard