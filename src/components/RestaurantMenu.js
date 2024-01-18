import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { IMAGE_URL } from "../config"
import Shimmer from "./Shimmer"
import Accordian from "./Accordian"

const RestaurantMenu = () => {
    const {resId} = useParams()
    console.log('In resturantMenu',resId)
    const [restaurantList, setRestaurantList] = useState([])
    const [itemCategories, setItemCategories] = useState([])
    useEffect(()=>{
        getResturants()
    }, [])

    async function getResturants(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=" + resId + "&catalog_qa=undefined&submitAction=ENTER" )
        const originalData = await data.json()
        console.log('originalData', originalData?.data?.cards[2]?.groupedCard.cardGroupMap.REGULAR)
        let itemCategoriesNew = originalData?.data?.cards[2]?.groupedCard.cardGroupMap.REGULAR.cards.filter(c => c.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
        setItemCategories(itemCategoriesNew)
        const nestedItemCategory = originalData?.data?.cards[2]?.groupedCard.cardGroupMap.REGULAR.cards.filter(c => c.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory")
        console.log('category ', itemCategories) 
        // console.log('nestedItemCategory ', nestedItemCategory)
        let newObj = {
            "image": IMAGE_URL +  originalData?.data?.cards[0]?.card?.card?.info.cloudinaryImageId,
            "Name":  originalData?.data?.cards[0]?.card?.card?.info.name,
            "areaName":  originalData?.data?.cards[0]?.card?.card?.info.areaName,
            "Stars":  originalData?.data?.cards[0]?.card?.card?.info.avgRatingString,
        }
        setRestaurantList(newObj)
    }

    return restaurantList.length === 0 ? <Shimmer/> : (
            <div class="text-center mt-5 mb-5">
                <h2 class="text-bold text-2xl mb-4">{restaurantList.Name}</h2>
                {/* {for(const item of itemCategories)} */}
                <Accordian itemCategories={itemCategories[0].card.card}/>
                <Accordian itemCategories={itemCategories[1].card.card}/>
                <Accordian itemCategories={itemCategories[2].card.card}/>
                {itemCategories.map((c)=>{
                    {console.log('hii')}
                    {<Accordian/>}
                })}    
                {/* <Accordian itemCategories={itemCategories}/> */}
            </div>        
    )
}

export default RestaurantMenu