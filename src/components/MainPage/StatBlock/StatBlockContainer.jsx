import React from 'react';
import {setGlobalStatActionCreator} from "../../../redux/covid-reducer";
import {connect} from "react-redux";
import StatBlock from "./StatBlock";

let mapStateToProps = (state) => {
    return {
        covidData: state.statBlock.covidData
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        setResults: (covidData) => {
            dispatch(setGlobalStatActionCreator(covidData))
        }
    }
};
const StatBlockContainer = connect(mapStateToProps, mapDispatchToProps)(StatBlock);
export default StatBlockContainer;