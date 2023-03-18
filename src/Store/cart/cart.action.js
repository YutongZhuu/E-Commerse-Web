import { CartActionTypes } from "./cart.action-type"
import { createAction } from "../../Utili/reducer.utili"

export const addCartItems = (currentCartProducts, CartItem) => { 
    return createAction(CartActionTypes.SET_CART_ITEMS, addItem(currentCartProducts, CartItem))
}

export const reduceCartItem = (currentCartProducts, CartItem) => { 
    return createAction(CartActionTypes.SET_CART_ITEMS, reduceHandler(currentCartProducts, CartItem))
}

export const cancelCartItem = (currentCartProducts, CartItem) => { 
    return createAction(CartActionTypes.SET_CART_ITEMS, cancelHandler(currentCartProducts, CartItem))
}

export const setCartDropdown = (DropdownStatus) => {
    return createAction(CartActionTypes.SET_CURRENT_CART_STATUS, DropdownStatus)
}

const addItem = (cartItems, productAdd) => {
    const flag = cartItems.find((productFind) => {
        return productAdd.id == productFind.id
    })

    if (flag) {
        return cartItems.map((productFind, index) => productAdd.id === productFind.id ? { ...productAdd, count: cartItems[index].count + 1 } : productFind)
    }

    return [...cartItems, { ...productAdd, count: 1 }]
}

const cancelHandler = (cartItems, product) => {
    return cartItems.filter((productFind) => {
        if (product.id != productFind.id) {
            return product
        }
    })
}

const reduceHandler = (cartItems, product) => {
    if (product.count - 1 == 0) {
         return cartItems.filter((productFind) => {
            if (product.id != productFind.id) {
                return product
            }
        })
    }

    return cartItems.map((productFind) => {
        if (product.id == productFind.id) {
            return { ...product, count: product.count - 1 }
        } else {
            return productFind
        }
    })
}
