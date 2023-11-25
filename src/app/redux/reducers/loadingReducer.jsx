import { LOADING_STATE } from "../../constants/actionTypes";


export const loadingReducer = (state = false, action) => {
    switch (action.type) {
        case LOADING_STATE.CHANGE: 
            const toggleLoading = !state;
            return toggleLoading;

        case LOADING_STATE.NOT_LOADING:
            return false;
        case LOADING_STATE.LOADING:
            return true;
        default:
            return state;
    }
}