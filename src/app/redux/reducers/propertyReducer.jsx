import { PROPERTY_STATE } from "@/app/constants/actionTypes";

export const propertyReducer = (state = null, action) => {
    switch (action.type) {
        case PROPERTY_STATE.SET_PROPERTY:
            return action.property;
        default:
            return state;
    }
}