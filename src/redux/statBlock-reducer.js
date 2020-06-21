const SET_GLOBAL_STAT = 'SET_GLOBAL_STAT';

const initialState = {
    covidData: {}
};

const statBlockReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_GLOBAL_STAT: {
            return {
                ...state, covidData: {...state.covidData, ...action.covidData}
            }
        }
        default:
            return state;
    }
};

export const setGlobalStatActionCreator = (covidData) => {
    return {
        type: SET_GLOBAL_STAT,
        covidData
    }
};

export default statBlockReducer;