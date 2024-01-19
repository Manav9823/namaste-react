import { Component } from "react";
import UserContext from "../utils/UserContext";

class Profile extends Component{

    constructor(props){
        super(props)
        this.state = {
            count : 0,
            count2 :0
        }
        console.log('Child-constructor')
    }

    componentDidMount(){
        console.log('child-didMount')
    }

    render(){
        let {count} = this.state
        console.log('Child-rendered')
        return (
            <div class="h-36 mr-44 ml-44 mt-40 bg-slate-300 mb-16 text-center border-2 border-black">
                {/* Use of Context API in class Based Component */}
                <UserContext.Consumer>
                    {
                        ({loggedInAs}) => (
                            <h1 class="font-bold">Hii i am currently loggedIn As {loggedInAs}</h1>
                        )
                    }
                </UserContext.Consumer>
               <h1> This is my profile page</h1>
               {/* <h2>name : {this.props.name}</h2> */}
               <h2>age  : {this.props.age}</h2>
                {/* <h3>Count: {count}</h3>
               <button onClick={()=>{
                this.setState({count:1})
               }}> setCount </button> */}
            </div>
        )
    }
}

export default Profile