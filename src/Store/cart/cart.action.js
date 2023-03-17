import { CartActionTypes } from "../../Context/product.context"
import { createAction } from "../../Utili/reducer.utili"

export const addCartItems = (currentCartProducts, CartItem) => {
    console.log(addItem(currentCartProducts, CartItem))
    const x=addItem(currentCartProducts, CartItem)
    console.log({x: x})
    return createAction(CartActionTypes.Set_Selected_Products, x)
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

export const setCartDropdown = (DropdownStatus) => {
    return createAction(CartActionTypes.Set_Dropdown, DropdownStatus)
}   