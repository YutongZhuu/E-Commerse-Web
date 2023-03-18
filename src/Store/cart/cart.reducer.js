import { CartActionTypes } from "./cart.action-type";

const INITIAL_STATE = {
    cartItems: [],
    cartDrowdown: false
}

export const cartReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case CartActionTypes.SET_CART_ITEMS:
            return {
                ...state,
                cartItems: payload
            }
        case CartActionTypes.SET_CURRENT_CART_STATUS:
            return {
                ...state,
                cartDrowdown: payload
            }
        default:
            return state;
    }
}
