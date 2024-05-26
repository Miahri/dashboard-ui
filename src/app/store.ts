import {configureStore} from '@reduxjs/toolkit';
import {thunk} from "redux-thunk";
import {rootReducer} from "./reducers";

//export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunk)
})

// @ts-ignore
window.store = store