import { UserActionTypes } from "./user.action-types"
import { createAction } from "../../Utili/reducer.utili"

export const setcurrentUser=(user)=>{
     return createAction(UserActionTypes.SET_CURRENT_USER, user)
}   