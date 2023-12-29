import {useState} from 'react'
import './style.css'


const HeaderComponent = () => {
    const [login, setLogin] = useState("Login")
    const setLoginFunctionality = () => {
        login === "Login" ? setLogin("Logout") : setLogin("Login")
    }
    return (
        <div className= "header">
            <img className = "logo" alt = "logo" src= "https://repository-images.githubusercontent.com/199302991/94dcc600-94ff-11eb-9058-6308bc7a425e"></img>
            <ul>
                <li>About</li>
                <li>Contact</li>
                <li>Resturant</li>
                <li>More</li>
            </ul>
            <button onClick={setLoginFunctionality}>{login}</button>
        </div>
    )
}

export default HeaderComponent