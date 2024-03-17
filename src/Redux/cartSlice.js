import { createSlice } from "@reduxjs/toolkit";


const cartSlice =  createSlice({
    name : "cart",

    initialState :{
        items :[]
    } ,

    reducers:{
//it take action 
        addItem:(state , action)=>{
            //mutating the state here
            
            state.items.push(action.payload);
        },

        removeItem : (state , action) =>{
            state.items.pop();
        },
        clearCart:(state,action)=>{
            state.items.length = 0;
        }
    }

})


//export action and reducer

export const {addItem ,removeItem , clearCart} = cartSlice.actions;

export default cartSlice.reducer;