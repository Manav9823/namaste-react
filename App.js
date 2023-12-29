/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import BodyComponenet from './src/components/BodyComponent';
import HeaderComponent from './src/components/HeaderComponent';
import FooterComponent from './src/components/FooterComponent';

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
            <BodyComponenet/>
            <FooterComponent/>
        </>
    )
}

root.render(<FoodApp/>);