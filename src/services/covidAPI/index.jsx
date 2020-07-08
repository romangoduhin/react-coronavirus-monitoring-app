import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://api.covid19api.com",
});

const CovidAPI = {
  getGlobalStatistics: async () => {
    const response = await instance.get("/summary");
    console.log(response.data);
    return response.data;
  },
};

export default CovidAPI;
