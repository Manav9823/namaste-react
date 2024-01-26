import { IMAGE_URL } from "../config"
import { UseDispatch, useDispatch } from "react-redux"
import { addItem } from "../utils/CartSlice"
import Cart from "./Cart"

const AccordianBody = ({items}) => {
    console.log('items', items)
    const dispatch = useDispatch();
    const handleCartChange = (item) => {
        dispatch(addItem(item))
    }
    return (
        <div class="">
            {
                items.map((item) => ( 
                <div key={item.card.info.id} class="m-2 p-2 border-2 border-b-black flex justify-between">
                    <div class="w-9/12">
                        <div><span>{item.card.info.name}</span></div>
                        <div>{(item.card.info.price)/100}</div>
                        <div>{item.card.info.description}</div>
                    </div>
                    <div class="w-3/12 relative">
                        <img src={IMAGE_URL + item.card.info.imageId}/>
                        <button class="absolute top-0 ml-auto mr-auto bg-black
                         text-white rounded-md w-14 h-10 hover:bg-slate-700"
                        onClick={() => handleCartChange(item)}>Add+</button>
                    </div>
                </div>
                // <div>{console.log(item.card.info.name)}</div>
                ))
            }
        </div>
    )
}

export default AccordianBody