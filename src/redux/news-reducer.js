const SET_COVID_NEWS = "SET_COVID_NEWS";
const SET_TOTAL_RESULTS = "SET_TOTAL_RESULTS";

const initialState = {
  covidNews: [],
  totalResults: 0,
  pageSize: 5,
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COVID_NEWS: {
      return {
        ...state,
        covidNews: [...action.covidNews],
      };
    }
    case SET_TOTAL_RESULTS: {
      return {
        ...state,
        totalResults: action.totalResults,
      };
    }
    default:
      return state;
  }
};

export const setNewsActionCreator = (covidNews) => {
  return {
    type: SET_COVID_NEWS,
    covidNews,
  };
};

export const setTotalResultsActionCreator = (totalResults) => {
  return {
    type: SET_TOTAL_RESULTS,
    totalResults,
  };
};

export default newsReducer;
