import ResturantCard from "./ResturantCardComponent"
import { resturantList } from "../config"
import { useState } from "react"

const BodyComponenet = () => {
    const [searchText, setsearchText] = useState([])
    const [newResturantList, setnewResturantList] = useState(resturantList)

    const searchTextFromList = (searchText, newResturantList) => {
        if(searchText === "") return resturantList
        console.log(newResturantList)
        return newResturantList.filter((resturant) => resturant.Name.includes(searchText) )
    }
    return(
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
                const data = searchTextFromList(searchText, newResturantList)
                setnewResturantList(data)
            }}>Search</button>
        </div>
        <div className = "body">
            {
                newResturantList.map((resturant) => {
                    return <ResturantCard {...resturant}/>
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