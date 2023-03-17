import { createContext, useEffect, useState, useReducer } from "react";
import { createAction } from "../Utili/reducer.utili.js";
export const ProductContext = createContext({
    products: {},
    cartDropdown: false,
    selected_products: [],
    setselected_products: () => [],
    incramentHandler: () => []
})

export const CartActionTypes = {
    Set_Dropdown: "Set_Dropdown",
    Set_Selected_Products:"Set_Selected_Products"
}

const INITIAL_STATE={
    selected_products:[]
}

const CartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case (CartActionTypes.Set_Dropdown):
            return {
                ...state,
                cartDropdown: payload
            }
        case (CartActionTypes.Set_Selected_Products):
            return{
                ...state,
                selected_products: payload
            }
        default:
            throw new Error(`Unhandled type ${type} in userReducer`);
    }
}

export const ProductProvider = ({ children }) => {

    const [{ selected_products }, dispatch] = useReducer(CartReducer, INITIAL_STATE)
    const setselected_products = (product) => {
        dispatch(createAction(CartActionTypes.Set_Selected_Products, product))
    }

    const incramentHandler = (productAdd) => {
        setselected_products(AddItem(selected_products, productAdd))
    }
    const value = { selected_products, setselected_products, incramentHandler }
    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}

const AddItem = (cartItems, productAdd) => {
    const flag = cartItems.find((productFind) => {
        return productAdd.id == productFind.id
    })

    if (flag) {
        return cartItems.map((productFind, index) => productAdd.id === productFind.id ? { ...productAdd, count: cartItems[index].count + 1 } : productFind)
    }

    return [...cartItems, { ...productAdd, count: 1 }]
}