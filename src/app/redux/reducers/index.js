import { combineReducers } from "redux";
import { backgroundReducer } from "./backgroundReducer";
import { loadingReducer } from "./loadingReducer";
import { rentReducer } from "./rentReducer";
import { rentListReducer } from "./rentListReducer";
import { propertyListReducer } from "./propertyListReducer";
import { screenReducer } from "./screenReducer";
import { propertyReducer } from "./propertyReducer";

export const rootReducer = combineReducers({
    propertyList: propertyListReducer,
    currentProperty: propertyReducer,
    currentScreen: screenReducer,
    rentList: rentListReducer,
    background: backgroundReducer,
    currentRent: rentReducer,
    loading: loadingReducer,
});