import {useState} from 'react'
// import './style.css'
import { Link } from 'react-router-dom'
import useOnline from '../customHooks/useOnline'

const HeaderComponent = () => {
    const [login, setLogin] = useState("Login")
    const setLoginFunctionality = () => {
        login === "Login" ? setLogin("Logout") : setLogin("Login")
    }
    return (
        <div class="h-20 flex justify-between bg-slate-400 ">
            <div class="w-48">
            <img className = "logo" alt = "logo" src= "https://repository-images.githubusercontent.com/199302991/94dcc600-94ff-11eb-9058-6308bc7a425e"></img>
            </div>
            <ul class="flex flex-1 ml-20 mr-20 max-w-96 items-center justify-between">
                <Link to="/home"><li>Home</li></Link>
                <Link to="/about"><li>About</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
                <Link to="/more"><li>More</li></Link>
                <Link to="/instamart"><li>InstaMart</li></Link>
            </ul>
            
            <div class="w-24 flex items-center justify-between">
            <div>{useOnline() === true ? "🟢" : "🔴" }</div>
            <button onClick={setLoginFunctionality}>{login}</button>
            </div>
           
        </div>
    )
}

export default HeaderComponent