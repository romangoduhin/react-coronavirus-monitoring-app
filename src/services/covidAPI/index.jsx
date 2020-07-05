import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://api.covid19api.com",
});

const CovidAPI = {
  getGlobalStatistics: async () => {
    const response = await instance.get("/summary");
    return response.data.Global;
  },
  getCountryStatistics: async (currentCountry) => {
    const response = await instance.get(`/live/country/${currentCountry}`);
    console.log(response);
    return response.data;
  },
};

export default CovidAPI;
