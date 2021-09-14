import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import searchReducer from "./reducer";

const store = createStore(searchReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;