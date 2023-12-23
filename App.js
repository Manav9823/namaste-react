/* eslint-disable no-undef */



import React from 'react'
import ReactDOM from 'react-dom/client'

const heading1 = React.createElement("h1", {id: "title"}, "Namaste Everyone");
const heading2 = React.createElement("h2", {id: "title"}, "Namaste Everyone2");
const div = React.createElement("div", {id :"container"}, [heading1, heading2]);

// console.log(heading)
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root)
root.render(div);