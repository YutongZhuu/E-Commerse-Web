import { CartActionTypes } from "../../Context/product.context";

const INITIAL_STATE = {
    cartItems: [],
    cartDrowdown: false
}

export const cartReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case CartActionTypes.Set_Selected_Products:
            return {
                ...state,
                cartItems: payload
            }
        case CartActionTypes.Set_Dropdown:
            return {
                ...state,
                cartDrowdown: payload
            }
        default:
            return state;
    }
}
