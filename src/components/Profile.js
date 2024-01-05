import { Component } from "react";

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
            <div>
               <h1> This is my profile page</h1>
               <h2>name : {this.props.name}</h2>
               <h2>age  : {this.props.age}</h2>
                <h3>Count: {count}</h3>
               <button onClick={()=>{
                this.setState({count:1})
               }}> setCount </button>
            </div>
        )
    }
}

export default Profile