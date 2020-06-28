const SET_COVID_NEWS = 'SET_COVID_NEWS';

const initialState = {
    covidNews: []
};

const newsReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_COVID_NEWS: {
            return {
                ...state, covidNews: [...state.covidNews, ...action.covidNews]
            }
        }
        default:
            return state;
    }
};

export const setNewsActionCreator = (covidNews) => {
    return {
        type: SET_COVID_NEWS,
        covidNews
    }
};

export default newsReducer;