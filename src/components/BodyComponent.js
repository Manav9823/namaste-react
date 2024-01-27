import ResturantCard from "./ResturantCardComponent"
import { IMAGE_URL } from "../config"
import { useContext, useEffect, useState } from "react"
import Shimmer from './Shimmer'
// import './style.css'
import useOnline from '../customHooks/useOnline'
import UserContext from "../utils/UserContext"
import { Link } from "react-router-dom"

const BodyComponenet = () => {
    let resturantList = []
    const [searchText, setsearchText] = useState([])
    const [allResturantList, setAllResturantList] = useState(resturantList)
    const [filteredResturants, setFilteredResturant] = useState([])
    const {loggedInAs, setUserName} = useContext(UserContext)
    const {showSearchBar} = useContext(UserContext)
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
                "id" : restaurants.info.id,
                "time": "30-35 mins",
                "cuisines": "Italian, Continental, Fast Food, Salads, American"
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
    // const handleFoodComponent = (foodType) => {
    //     console.log("in handle food")
    //     // <Link to={"/food/" + foodType} > </Link>
    //     // <Link to={"/food/"+ foodType}>
    // }

    if(!useOnline()){
        return <h1>Sorry, Please Check your internet Connection </h1>
    }
    return filteredResturants.length === 0 ? <Shimmer/> :(
        <>
        {showSearchBar ? 
        <div class= "flex h-12 mt-2 mb-4 ">
            <input
                 type="text"
                 class=" w-6/12 ml-96 border-2 border-gray-500 pl-4 border-r-0"
                 placeholder="Search for your favourite resturants"
                 value= {searchText}
                 onChange={(e)=>{
                    setsearchText(e.target.value)
                 }}
            />
            <button class= "w-8 border-2 border-gray-500 border-l-0 " onClick={()=>{
                const data = searchTextFromList(searchText, allResturantList)
                // console.log(data)
                setFilteredResturant(data)
            }}>🚀</button>
            {/* <label class="font-bold mt-3 mr-2 ml-8">Login As:</label>
            <input
                 type="text"
                 class="w-52 border-2 border-black pl-4"
                 placeholder="search"
                 value= {loggedInAs}
                 onChange={(e)=>{
                    setLoggedInAs(e.target.value)
                 }}
            /> */}
        </div>
        : ''}
        <div class="mx-28">
        <div class="mt-4">
            <h1 class="text-2xl text-bold ">Manav, What's on your mind?</h1>
            <div class="grid grid-cols-6">
                <Link to={"/food/"+ "Biryani"}>
                <div>
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png"></img>
                </div>
                </Link>
                <Link to={"/food/"+ "Burger"}>
                <div>
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png"></img>
                </div>
                </Link>
                <Link to={"/food/"+"South_Indian"}>
                <div>
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667626/PC_Creative%20refresh/South_Indian_4.png"></img>
                </div>
                </Link>
                <Link to={"/food/"+"North_Indian"}>
                <div>
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/North_Indian_4.png"></img>
                </div>
                </Link >
                <Link to={"/food/"+"Rolls"}>
                <div>
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png"></img>
                </div>
                </Link>
                <Link to={"/food/"+"Idli"}>
                <div>
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Idli.png"></img>
                </div>
                </Link>
            </div>
        </div>
        <h1 class="text-bold text-2xl">Top resturants in Banglore</h1>
        <div className = "ml-3 mr-3 mt-4 grid grid-cols-5 gap-5 gap-y-6 rounded-2xl">
            {
                filteredResturants.length === 0 ? ( <h1>No resturants by this name</h1>) :
                filteredResturants.map((resturant, index) => {
                    return <ResturantCard key={index} {...resturant}/>
                })
            }
        </div>
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