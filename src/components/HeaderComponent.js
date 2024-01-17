import {useState} from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import useOnline from '../customHooks/useOnline'

const HeaderComponent = () => {
    const [login, setLogin] = useState("Login")
    const setLoginFunctionality = () => {
        login === "Login" ? setLogin("Logout") : setLogin("Login")
    }
    return (
        <div className= "header">
            <img className = "logo" alt = "logo" src= "https://repository-images.githubusercontent.com/199302991/94dcc600-94ff-11eb-9058-6308bc7a425e"></img>
            <ul>
                <Link to="/home"><li>Home</li></Link>
                <Link to="/about"><li>About</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
                <Link to="/more"><li>More</li></Link>
                <Link to="/instamart"><li>InstaMart</li></Link>
            </ul>
            <li>{useOnline() === true ? "🟢" : "🔴" }</li>
            <button onClick={setLoginFunctionality}>{login}</button>
        </div>
    )
}

export default HeaderComponent