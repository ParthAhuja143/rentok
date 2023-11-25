const { RENT_LIST_STATE, PROPERTY_STATE, APP_BACKGROUND, RENT_STATE, SCREEN_STATE } = require("@/app/constants/actionTypes");

export const setRentList = (rentList) => ({
    type: RENT_LIST_STATE.SET_RENT_LIST,
    rentList: rentList
});

export const setAppBackground = (background) => ({
    type: APP_BACKGROUND.SET_BACKBROUND,
    background: background,
});

export const setCurrentProperty = (property) => ({
    type: PROPERTY_STATE.SET_PROPERTY,
    property: property,
});

export const setCurrentRent = (rent) => ({
    type: RENT_STATE.SET_CURRENT_RENT,
    rent: rent,
});

export const setCurrentScreen = screen => ({
    type: SCREEN_STATE.SET_SCREEN,
    screen: screen
})