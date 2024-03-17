import {configureStore} from '@reduxjs/toolkit';
import cartreducer from './cartSlice';
const store = configureStore({
    reducer:{ 
        
        //contains reducer of each slice
        cart:cartreducer,
    }
});

export default store;