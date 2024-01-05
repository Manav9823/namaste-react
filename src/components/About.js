import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import { Component } from "react";

// const About = () => {
//     return (
//         <div>
//             Hii my name is Manav 
//             <Profile name = {"manav"} age={23}/>
//         </div>
//     )

// }

class About extends Component{
    constructor(props){
        super(props)
        console.log('Parent-constructor')
        /**
         * State is intialized inside the constructor as this is the first thing that
         * is called when a component renders
         */
    }

    componentDidMount(){
        console.log('Parent-component did mount')
        /**
         * API call is made inside componentDidMount as this is the place that is 
         * called after the component is rendered
         */
    }
    render(){
        console.log('Parent-rendered')
        return(
            <>
            <h1>Hii my name is manav</h1>
            <Profile name={"manav"} age={23}/>
            <Profile name={"bansal"} age={24}/>
            </>
        )
    }
}

export default About;