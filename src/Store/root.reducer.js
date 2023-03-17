import { combineReducers } from "redux";
import { userReducers } from "./user/user.reducer";
import { productsReducer } from "./products/products.reducer";
import { cartReducer } from "./cart/cart.reducer";
export const rootReducer=combineReducers({
    user: userReducers,
    product: productsReducer,
    cart: cartReducer
})