import { RENT_LIST_STATE } from "../../constants/actionTypes";

export const rentListReducer = (state = [], action) => {
    switch (action.type){
        case RENT_LIST_STATE.SET_RENT_LIST: 
            return action.rentList;
        default:
            return state;
    }
}