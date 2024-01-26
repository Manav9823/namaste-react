import AccordianBody from "./AccordianBody"
import { useState } from "react"

const Accordian = ({itemCategories}) => {
    const [showItems, setShowItems] = useState(false)
    const changeShowItems = () =>{
        setShowItems(!showItems)
    }
    console.log('In accordian')
    console.log(itemCategories)
    return (
        <div class="w-6/12 bg-slate-200 mx-auto my-3 py-4 px-4 cursor-pointer">
            <div class="text-bold flex justify-between hover:bg-slate-400 hover:rounded-md" onClick={changeShowItems}>
                <h1>{itemCategories.title}</h1>
                <span>🔽</span>
            </div>
            {showItems && <AccordianBody items = {itemCategories.itemCards}/>}
            
        </div>
    )
}

export default Accordian