import { SCREEN_STATE } from "../../constants/actionTypes";

export const screenReducer = (state = null, action) => {
    switch (action.type){
        case SCREEN_STATE.SET_SCREEN:
            return action.screen;
        default:
            return state;
    }
};