import { ProductsActionTypes } from "./products.action-type";

const INITIAL_STATE={
    products:{}
}

export const productsReducer=(state=INITIAL_STATE, action)=>{
    const {type, payload}=action;

    switch(type){
        case ProductsActionTypes.SET_PRODUCTS:
            return{
                ...state,
                products:payload
            }

        default:
            return state;
    }
}
