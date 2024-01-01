import ResturantCard from "./ResturantCardComponent"
import { IMAGE_URL } from "../config"
import { useEffect, useState } from "react"
import Shimmer from './Shimmer'
import './style.css'


const BodyComponenet = () => {
    let resturantList = []
    const [searchText, setsearchText] = useState([])
    const [allResturantList, setAllResturantList] = useState(resturantList)
    const [filteredResturants, setFilteredResturants] = useState([])

    useEffect(()=>{
        console.log('In useEffect')
        getResturantListFromSwiggy()
    }, [])

    async function getResturantListFromSwiggy(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const originalData = await data.json()
        originalData.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map((restaurants)=>{

           console.log(restaurants.info.name) 
           let newObj = {
            "image": IMAGE_URL + restaurants.info.cloudinaryImageId,
            "Name": restaurants.info.name,
            "areaName": restaurants.info.areaName,
            "Stars": restaurants.info.avgRatingString,
        }
           resturantList.push(newObj)
           const info = restaurants.info
           console.log(info)
        })
        setFilteredResturants(resturantList)
        // console.log(data.body)
    }

    console.log('Rendered')

    const searchTextFromList = (searchText, newResturantList) => {
        if(searchText == "") return newResturantList
        console.log(newResturantList)
        return newResturantList.filter((resturant) => resturant.Name.toLowerCase().includes(searchText.toLowerCase()))
    }
    return filteredResturants.length === 0 ? <Shimmer/> :(
        <>
        <div className="search-Container">
            <input
                 type="text"
                 className="search-input"
                 placeholder="search"
                 value= {searchText}
                 onChange={(e)=>{
                    setsearchText(e.target.value)
                 }}
            />
            <button onClick={()=>{
                const data = searchTextFromList(searchText, allResturantList)
                console.log(data)
                setFilteredResturants(data)
            }}>Search</button>
        </div>
        <div className = "body">
            {
                filteredResturants.length === 0 ? ( <h1>No resturants by this name</h1>) :
                filteredResturants.map((resturant, index) => {
                    return <ResturantCard key={index} {...resturant}/>
                })
            }
        </div>
        </>
        
        // <div className= "body">
        //     <ResturantCard {...resturantList[0]}/>
        //     <ResturantCard {...resturantList[1]}/>
        //     <ResturantCard {...resturantList[2]}/>
        //     <ResturantCard {...resturantList[3]}/>
        // </div>
    )
}

export default BodyComponenet