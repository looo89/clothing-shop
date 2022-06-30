import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { clothesReduser } from "./reducers/clothesReduser";

const rootReducer = combineReducers({
    dress: clothesReduser
})

export const store = createStore(rootReducer, applyMiddleware(thunk))