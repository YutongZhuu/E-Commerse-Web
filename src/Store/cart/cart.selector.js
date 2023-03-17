import {createSelector} from 'reselect'
export const selectCartItems=(state)=>{
    // console.log({statecartcartItems: state.cart.cartItems})
    return state.cart.cartItems};
export const selectCartDropdown=(state)=>state.cart.cartDrowdown;

