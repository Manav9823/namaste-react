import { useState, useEffect } from "react"
import { IMAGE_URL } from "../config"

const useRestaurant = () => {
    let resturantList = []
    const [filteredResturants, setFilteredResturants] = useState([])

    useEffect(()=>{
        console.log('In useEffect')
        getResturantListFromSwiggy()
    }, [])

    async function getResturantListFromSwiggy(){
        console.log('hii from manaav')
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const originalData = await data.json()
        // console.log('original Data', originalData)
        // console.log("hii before")
        // console.log(originalData.data.cards)
        originalData.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map((restaurants)=>{
        // console.log('hii')
        //    console.log(restaurants.info.name) 
           let newObj = {
            "image": IMAGE_URL + restaurants.info.cloudinaryImageId,
            "Name": restaurants.info.name,
            "areaName": restaurants.info.areaName,
            "Stars": restaurants.info.avgRatingString,
            "id" : restaurants.info.id
        }
           resturantList.push(newObj)
        //    const info = restaurants.info
        //    console.log(info)
        })
        setFilteredResturants(resturantList)
        // console.log(data.body)
    }
    return filteredResturants
}

export default useRestaurant