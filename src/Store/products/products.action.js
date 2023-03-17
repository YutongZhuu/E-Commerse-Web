
import { ProductsActionTypes } from "./products.action-type"
import { createAction } from "../../Utili/reducer.utili"

export const setProducts=(products)=>{
     return createAction(ProductsActionTypes.SET_PRODUCTS, products)
}   