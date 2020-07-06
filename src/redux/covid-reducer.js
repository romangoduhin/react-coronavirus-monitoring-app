const SET_SUMMARY_STAT = "SET_SUMMARY_STAT";
const SET_COUNTRY_STAT = "SET_COUNTRY_STAT";
const SET_GLOBAL_STAT = "SET_GLOBAL_STAT";
const initialState = {
  summaryCovidStat: {},
  globalCovidStat: [],
  countryCovidStat: [
    {
      Confirmed: 0,
      Deaths: 0,
      Recovered: 0,
      Date: "2020-04-14T00:00:00Z",
    },
  ],
};

const covidReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SUMMARY_STAT: {
      return {
        ...state,
        summaryCovidStat: {
          ...state.summaryCovidStat,
          ...action.summaryCovidStat,
        },
      };
    }
    case SET_GLOBAL_STAT: {
      return {
        ...state,
        globalCovidStat: [...state.globalCovidStat, ...action.globalCovidStat],
      };
    }
    case SET_COUNTRY_STAT: {
      return {
        ...state,
        countryCovidStat: [...action.countryCovidStat],
      };
    }
    default:
      return state;
  }
};

export const setSummaryStatActionCreator = (summaryCovidStat) => {
  return {
    type: SET_SUMMARY_STAT,
    summaryCovidStat,
  };
};

export const setCountryStatActionCreator = (countryCovidStat) => {
  return {
    type: SET_COUNTRY_STAT,
    countryCovidStat,
  };
};
export const setGlobalStatActionCreator = (globalCovidStat) => {
  return {
    type: SET_GLOBAL_STAT,
    globalCovidStat,
  };
};

export default covidReducer;
