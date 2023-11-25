import { RENT_STATE } from "../../constants/actionTypes";

export const rentReducer = (state = null, action) => {
    switch (action.type) {
        case RENT_STATE.SET_CURRENT_RENT:
            return action.rent;
        default:
            return state;
    }
}