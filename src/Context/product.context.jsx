import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../Utili/firebase.component.js";
import SHOP_DATA from '../shop-data'

const AddItem = (cartItems, productAdd) => {
    const flag = cartItems.find((productFind) => {
        return productAdd.id == productFind.id
    })

    if (flag) {
        return cartItems.map((productFind, index) => productAdd.id === productFind.id ? { ...productAdd, count : cartItems[index].count + 1 } : productFind)
    } 
    
    return [...cartItems, { ...productAdd, count: 1 }]
}

export const ProductContext = createContext({
    products: {},
    setselected_products: ()=> [],
    incramentHandler: () => []
})

export const ProductProvider = ({ children }) => {
    const [products, setproducts] = useState({})

    useEffect(()=>{
        const getCategories=async()=>{
           const product= await getCategoriesAndDocuments()
           setproducts(product)
        }
        getCategories()
    }, [])

    const [selected_products, setselected_products] = useState([])
    const incramentHandler = (productAdd) => {
        setselected_products(AddItem(selected_products, productAdd))
    }
    const value = { products, selected_products, setselected_products, incramentHandler }
    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}   


