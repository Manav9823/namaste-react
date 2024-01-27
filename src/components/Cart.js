import { useDispatch, useSelector } from "react-redux";
import AccordianBody from "./AccordianBody";
import { Link } from "react-router-dom";
import { emptyCart } from "../utils/CartSlice";

const Cart = () => {
   const dispatch = useDispatch()
   const storeItems = useSelector((store)=>store.cart.item)
   const empty = () => {
      dispatch(emptyCart())
   }
 return (
    <>
      <div class="text-center mx-48 my-5 p-4">
         {storeItems.length ?
         <div class="mx-10">
            <div>
               <button class="bg-black text-white text-bold p-3 rounded-md" onClick={empty}>Empty Cart</button>
            </div>
            <AccordianBody items={storeItems}/>
         </div>
         :
         <div class="text-center">
            <h1 class="text-bold text-2xl">Your Cart is Empty</h1>
            <h1>You can go to home page and view more resturants</h1>
            <div class="mt-5 ">
            <button class="bg-orange-500 text-bold text-white p-3">See Resturant near you</button>
            </div>
         </div>
         }
         
         </div>
    </>
 )
}
export default Cart;