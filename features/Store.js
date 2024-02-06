import { combineReducers } from "redux";
import ProductsSlice from "./Products.slice"
import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Cart.slice";

const reducer = combineReducers({
    products: ProductsSlice,
    cart: CartSlice
})

export const store = configureStore({ reducer: reducer }) 