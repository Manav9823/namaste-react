import {useContext, useState} from 'react'
// import './style.css'
import { Link } from 'react-router-dom'
import useOnline from '../customHooks/useOnline'
import UserContext from '../utils/UserContext'
import { useSelector } from 'react-redux'

const HeaderComponent = () => {
    const [login, setLogin] = useState("Login")
    // for subscribing to the store
    const cartItems = useSelector((store)=> store.cart.item)
    const {showSearchBar, setBar} = useContext(UserContext)
    const handleOnClick = () => {
        setBar(!showSearchBar)
    }
    const setLoginFunctionality = () => {
        login === "Login" ? setLogin("Logout") : setLogin("Login")
    }
    const {loggedInAs} = useContext(UserContext)
    return (
        <div class="h-28 flex bg-neutral-100">
            <div class="w-5/12 px-20 flex">
            <img class= "h-28 mr-4" className = "logo" alt = "logo" src= "https://play-lh.googleusercontent.com/A8jF58KO1y2uHPBUaaHbs9zSvPHoS1FrMdrg8jooV9ftDidkOhnKNWacfPhjKae1IA"></img>
            <div class="flex justify-center">
                <h1 class="font-bold m-auto text-xl border-b-2 border-black">BalaJiColony</h1>
                <h2 class="my-auto ml-2">15/11, KG Halli D'Souza Layout</h2>
            </div>
            </div>
            <div class ="w-6/12 flex justify-between px-20 ml-20">
                <ul class="flex flex-1  items-center justify-between w-8/12">
                    <Link to="/home"><li class ="font-bold text-lg  text-gray-400">Home</li></Link>
                    {/* <Link to="/about"><li class ="font-bold text-lg  text-gray-400">About</li></Link>
                    <Link to="/contact"><li class ="font-bold text-lg  text-gray-400">Contact</li></Link> */}
                    <div class="font-bold text-lg text-gray-400 cursor-pointer" onClick={handleOnClick}>Search</div>
                    <Link to="/more"><li class ="font-bold text-lg  text-gray-400">More</li></Link>
                    <Link to="/instamart"><li class ="font-bold text-lg  text-gray-400">InstaMart</li></Link>
                    <Link to="/cart">
                        <li class ="font-bold text-lg  text-gray-400">Cart-{cartItems.length}</li>
                    </Link>
                </ul>
                
                {/* <div class="w-2/12 flex items-center justify-between">
                <div class="w-2/12">{useOnline() === true ? "🟢" : "🔴" }</div>
                <h4 class="w-9/12">{loggedInAs}</h4>
                </div> */}
            </div>
        </div>
    )
}

export default HeaderComponent