import {combineReducers, configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import productsReducer from './slices/productsSlice';
import productReducer from './slices/productSlice';

import authReducer from './slices/authSlice';



const reducer = combineReducers({
    
      productsState: productsReducer , //multiple product reducer
      
      productState: productReducer ,// single product reducer

      authState: authReducer

})


 const store = configureStore({

    reducer,
    middleware: [thunk]

})

export default store

