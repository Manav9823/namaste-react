import { createSlice } from "@reduxjs/toolkit"

const CartSlice = createSlice({
    name: "cart",
    initialState: {
        item: []
    },
    reducers: {
        addItem: (state, action) => {
            console.log(action.payload)
            state.item.push(action.payload)
        },
        deleteItem: (state) =>{
            state.item.pop()
        },
        emptyCart: (state) =>{
            console.log('In empty cart')
            state.item.length = 0
        }
    }
})

export const {addItem, deleteItem, emptyCart} = CartSlice.actions
export default CartSlice.reducer
