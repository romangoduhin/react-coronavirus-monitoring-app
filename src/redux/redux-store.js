import {combineReducers, createStore} from "redux";
import covidReducer from "./covid-reducer";
import newsReducer from "./news-reducer";

let reducers = combineReducers({
    //_state:{
    covid: covidReducer,
    news: newsReducer
    //}
});
let store = createStore(reducers);
export default store;