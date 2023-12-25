/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'

const heading1 = React.createElement("h1", {id: "title"}, "Namaste Everyone");
const heading2 = React.createElement("h2", {id: "title"}, "Namaste Everyone2");
const heading3 = React.createElement("h3", {id: "h3", key: "h3"}, "This is heading 3" )
const div = React.createElement("div", {id :"container"}, [heading1, heading2, heading3]);

// console.log(heading)
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root)

// const heading = <h1 id="h1" key = "h1">lets play cricket</h1>

const resturantList = [
    {
        "image": "https://www.google.com/url?sa=i&url=http%3A%2F%2Ftruffles.co.in%2Fgallery.html&psig=AOvVaw0Sx91oqCu0pdIOKGQX1G1N&ust=1703579121553000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPC0kpSVqoMDFQAAAAAdAAAAABAD",
        "Name": "Truffles",
        "City": "Banglore",
        "Stars": "4.2",
    },
    {
        "image":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
        "Name": "Burger King",
        "City": "Banglore",
        "Stars": "5.0",
    },
    {
        "image": "https://media-assets.swiggy.com/swiggy/image/uploa…uto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4",
        "Name": "KFC",
        "City": "Banglore",
        "Stars": "4.1",
    },
    {
        "image": "https://media-assets.swiggy.com/swiggy/image/uploa…uto,q_auto,w_660/bb7ae131544c7d37e10fc5faf76f09d6",
        "Name": "McDonald's",
        "City": "Banglore",
        "Stars": "5",
    },
    
]


const ResturantCard = ({image, Name, City, Stars}) => {
    // console.log(props)
    return(
        <div className= "resturantCard">
            <img className = "logo" alt = "logo" src = {image}></img>
            <h2>{Name}</h2>
            <h4>{City}</h4>
            <h4>{Stars}</h4>
        </div>
    )
}

const HeaderComponent = () => {
    return (
        <div className= "header">
            <img className = "logo" alt = "logo" src= "https://repository-images.githubusercontent.com/199302991/94dcc600-94ff-11eb-9058-6308bc7a425e"></img>
            <ul>
                <li>About</li>
                <li>Contact</li>
                <li>Resturant</li>
                <li>More</li>
            </ul>
        </div>
    )
}

const BodyComponenet = () => {
    return(
        <div className = "body">
            {
                resturantList.map((resturant) => {
                    return <ResturantCard {...resturant}/>
                })
            }
        </div>
        // <div className= "body">
        //     <ResturantCard {...resturantList[0]}/>
        //     <ResturantCard {...resturantList[1]}/>
        //     <ResturantCard {...resturantList[2]}/>
        //     <ResturantCard {...resturantList[3]}/>
        // </div>
    )
}

const FooterComponent = () => {
    return (
        <div>FooterComponent</div>
    )
}

const FoodApp = () => {
    return (
        <>
            <HeaderComponent/>
            <BodyComponenet/>
            <FooterComponent/>
        </>
    )
}

root.render(<FoodApp/>);