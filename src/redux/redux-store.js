import {combineReducers, createStore} from "redux";
import statBlockReducer from "./statBlock-reducer";
let reducers = combineReducers({
    //_state:{
    statBlock: statBlockReducer,

    //}
});
let store=createStore (reducers);
export default store;