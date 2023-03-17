import { UserActionTypes } from "./user.action-types";

const INITIAL_STATE = {
    currentUser: null
}

export const userReducers = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
            return state;
    }
}

