import * as axios from "axios";

const instance = axios.create({
  baseURL: "http://newsapi.org/v2/top-headlines",
});
const key = "27c471b3433042e4ae9014757912bfb4";

const newsAPI = {
  getNews: async (searchWord = "covid", currentPage, pageSize, country) => {
    const response = await instance.get(
      `?q=${searchWord}&apiKey=${key}${
        country ? "&country=" + country : ""
      }&page=${currentPage}&pageSize=${pageSize}`
    );
    console.log(response);
    return response.data;
  },
  getFullNews: async (searchWord = "covid", pageSize) => {
    const response1 = await instance.get(
      `?q=${searchWord}&apiKey=${key}&pageSize=${pageSize}`
    );
    console.log(response1);
    return response1.data;
  },
};

export default newsAPI;
