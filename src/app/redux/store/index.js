// store.ts
import {rootReducer} from "../reducers";
import { createWrapper } from "next-redux-wrapper";
import {
  configureStore,
} from '@reduxjs/toolkit';

const initialState = {
  currentProperty: null,
  currentScreen: 'Rent',
  rentList: [],
  propertyList: [],
  background: null,
  currentRent: null,
  loading: false,
};

export const createStore = () => configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});

export const store = createStore();


export const wrapper = createWrapper(createStore, {debug: true});