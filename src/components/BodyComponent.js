import ResturantCard from "./ResturantCardComponent"
import { IMAGE_URL } from "../config"
import { useContext, useEffect, useState } from "react"
import Shimmer from './Shimmer'
// import './style.css'
import useOnline from '../customHooks/useOnline'
import UserContext from "../utils/UserContext"

const BodyComponenet = () => {
    let resturantList = []
    const [searchText, setsearchText] = useState([])
    const [allResturantList, setAllResturantList] = useState(resturantList)
    const [filteredResturants, setFilteredResturant] = useState([])
    const {loggedInAs, setUserName} = useContext(UserContext)
    console.log(loggedInAs)
    console.log(setUserName)
    const setLoggedInAs = (value) => {
        setUserName(value)
    }

    useEffect(()=>{
        console.log('In useEffect')
        getResturantListFromSwiggy()
    }, [])

    async function getResturantListFromSwiggy(){
        // console.log('hii from manaav')
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const originalData = await data.json()
        // console.log("hii before")
        // console.log(originalData.data.cards)
        originalData.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map((restaurants)=>{
            // console.log('hii')
            // console.log(restaurants.info.name) 
            let newObj = {
                "image": IMAGE_URL + restaurants.info.cloudinaryImageId,
                "Name": restaurants.info.name,
                "areaName": restaurants.info.areaName,
                "Stars": restaurants.info.avgRatingString,
                "id" : restaurants.info.id
            }
           resturantList.push(newObj)
           const info = restaurants.info
        //    console.log(info)
        })
        setFilteredResturant(resturantList)
        // console.log(data.body)
    }

    // console.log('Rendered')

    const searchTextFromList = (searchText, newResturantList) => {
        if(searchText == "") return newResturantList
        console.log(newResturantList)
        return newResturantList.filter((resturant) => resturant.Name.toLowerCase().includes(searchText.toLowerCase()))
    }

    if(!useOnline()){
        return <h1>Sorry, Please Check your internet Connection </h1>
    }
    return filteredResturants.length === 0 ? <Shimmer/> :(
        <>
        <div class= "flex h-12 mt-2 mb-4 justify-center">
            <input
                 type="text"
                 class="w-52 border-2 border-black pl-4"
                 placeholder="search"
                 value= {searchText}
                 onChange={(e)=>{
                    setsearchText(e.target.value)
                 }}
            />
            <button class= "w-9 border-2 border-black bg-slate-300" onClick={()=>{
                const data = searchTextFromList(searchText, allResturantList)
                // console.log(data)
                setFilteredResturant(data)
            }}>🚀</button>
            <label class="font-bold mt-3 mr-2 ml-8">Login As:</label>
            <input
                 type="text"
                 class="w-52 border-2 border-black pl-4"
                 placeholder="search"
                 value= {loggedInAs}
                 onChange={(e)=>{
                    setLoggedInAs(e.target.value)
                 }}
            />
        </div>
        <div className = "ml-3 mr-3 grid grid-cols-5 gap-5 gap-y-6 ">
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