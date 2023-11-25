import { PROPERTY_LIST_STATE } from "../../constants/actionTypes";

export const propertyListReducer = (state = [], action) => {
    switch (action.type){
        case PROPERTY_LIST_STATE.SET_PROPERTY_LIST: 
            return action.propertyList;
        default:
            return state;
    }
}