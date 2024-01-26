import { useSelector } from "react-redux";
import AccordianBody from "./AccordianBody";

const Cart = () => {
   const storeItems = useSelector((store)=>store.cart.item)
 return (
    <>
      <div class="text-center m-8 p-4">
         <h1 class="font-bold text-2xl">Cart</h1>
         <div>
         <AccordianBody items={storeItems}/>
         </div>
      </div>
    </>
 )
}
export default Cart;