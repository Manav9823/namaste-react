/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import BodyComponenet from './src/components/BodyComponent';
import HeaderComponent from './src/components/HeaderComponent';
import FooterComponent from './src/components/FooterComponent';
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom'
import About from './src/components/About';
import Contact from './src/components/Contact';
import More from './src/components/More';
import Error from './src/components/Error';
import ResturantCard from './src/components/ResturantCardComponent';
import RestaurantMenu from './src/components/RestaurantMenu';
import Profile from './src/components/Profile'
import Shimmer from './src/components/Shimmer';
const InstaMart = lazy(()=> import ('./src/components/Instamart'))



const heading1 = React.createElement("h1", {id: "title"}, "Namaste Everyone");
const heading2 = React.createElement("h2", {id: "title"}, "Namaste Everyone2");
const heading3 = React.createElement("h3", {id: "h3", key: "h3"}, "This is heading 3" )
// const div = React.createElement("div", {id :"container"}, [heading1, heading2, heading3]);

// console.log(heading)
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root)

// const heading = <h1 id="h1" key = "h1">lets play cricket</h1>

const FoodApp = () => {
    return (
        <>
            <HeaderComponent/>
            <Outlet/>
            <FooterComponent/>
        </>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <FoodApp/>,
        errorElement:<Error/>,
        children: [
            {   
                path:"/",
                element: <BodyComponenet/>

            },
            {
                path: "/home",
                element:<BodyComponenet/>
            },
            {   
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>

            },
            {
                path:"/instamart",
                element:(
                    <Suspense fallback=<Shimmer/>><InstaMart/></Suspense>
                )
            },
            {
                path: "/about",
                element: <About/>,
                children:[
                    {
                        path:"profile",
                        element: <Profile/>
                    }
                ]
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/more",
                element: <More/>
            }
        ]
    }
])

root.render(<RouterProvider router={router}/>);