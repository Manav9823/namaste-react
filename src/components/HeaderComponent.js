import {useContext, useState} from 'react'
// import './style.css'
import { Link } from 'react-router-dom'
import useOnline from '../customHooks/useOnline'
import UserContext from '../utils/UserContext'

const HeaderComponent = () => {
    const [login, setLogin] = useState("Login")
    const setLoginFunctionality = () => {
        login === "Login" ? setLogin("Logout") : setLogin("Login")
    }
    const {loggedInAs} = useContext(UserContext)
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
            
            <div class="w-28 flex items-center justify-between">
            <div class="w-2/12">{useOnline() === true ? "🟢" : "🔴" }</div>
            {/* <button onClick={setLoginFunctionality}>{login}</button> */}
            <h4 class="w-9/12">{loggedInAs}</h4>
            </div>
           
        </div>
    )
}

export default HeaderComponent