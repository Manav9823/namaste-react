import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Shimmer from './Shimmer'
import ResturantCard from "./ResturantCardComponent"
import { IMAGE_URL } from "../config"

export default Foods = () => {
    console.log('In food component')
    const {foodType} = useParams()
    const [resturants, setResturants] = useState([])
    useEffect(()=>{
        fetchSpecificfoodItems(foodType)
    }, [])

    const fetchSpecificfoodItems = async (foodType) =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&collection=83649&tags=layout_CCS_" + foodType + "&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
        // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&collection=83637&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2&offset=0&page_type=null")
        const originalData = await data.json()
        console.log(originalData)
        const cards = originalData.data.cards.filter((card) => card.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant")
        console.log(cards)
        let obj = []
        cards.map((card)=>{
            let newObj = {
                "image": IMAGE_URL + card.card.card.info.cloudinaryImageId,
                "name": card.card.card.info.name,
                "areaName": card.card.card.info.areaName,
                "Stars": card.card.card.info.avgRatingString,
                "id" : card.card.card.info.id,
                "time": "30-35 mins",
                "cuisines": "Italian, Continental, Fast Food, Salads, American"
            }
            obj.push(newObj)
        })
        console.log(obj)
        setResturants(obj)
    }

    return resturants.length == 0 ? <Shimmer/> : (
        <div class="mx-28">
            <div class="my-4">
                <h1 class="text-bold text-5xl mb-2">{foodType}</h1>
                <h1>Taste these delectable classics, delectable {foodType.toLowerCase()} to make your day.</h1>
            </div>
            <div class="grid grid-cols-4 gap-5 gap-y-6">
            { 
                resturants.map((resturants, index)=>{
                return <ResturantCard key= {index} {...resturants}/>
                })
            }   
            </div>
        </div>
    )
}

