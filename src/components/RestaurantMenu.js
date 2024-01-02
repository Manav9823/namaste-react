import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { IMAGE_URL } from "../config"
import Shimmer from "./Shimmer"

const RestaurantMenu = () => {
    const {resId} = useParams()
    console.log('In resturantMenu',resId)
    const [restaurantList, setRestaurantList] = useState([])

    useEffect(()=>{
        getResturants()
    }, [])

    async function getResturants(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=" + resId + "&catalog_qa=undefined&submitAction=ENTER" )
        const originalData = await data.json()
        console.log('originalData', originalData)
        let newObj = {
            "image": IMAGE_URL +  originalData?.data?.cards[0]?.card?.card?.info.cloudinaryImageId,
            "Name":  originalData?.data?.cards[0]?.card?.card?.info.name,
            "areaName":  originalData?.data?.cards[0]?.card?.card?.info.areaName,
            "Stars":  originalData?.data?.cards[0]?.card?.card?.info.avgRatingString,
        }
        setRestaurantList(newObj)
        // originalData.data.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map((restaurants)=>{

        //    console.log(restaurants.info.name) 
        //    let newObj = {
        //     "image": IMAGE_URL + restaurants.info.cloudinaryImageId,
        //     "Name": restaurants.info.name,
        //     "areaName": restaurants.info.areaName,
        //     "Stars": restaurants.info.avgRatingString,
        //     "id" : restaurants.info.id
        // }
        //    setRestaurantList(newObj)
        //    const info = restaurants.info
        //    console.log(info)
        // })
        // console.log(data.body)
    }

    return restaurantList.length === 0 ? <Shimmer/> : (
        <div>
            <img src= {restaurantList.image}/>
            <h2>{restaurantList.Name}</h2>
            <h4>{restaurantList.areaName}</h4>
            <h4>{restaurantList.Stars}</h4>
        </div>
    )
}

export default RestaurantMenu