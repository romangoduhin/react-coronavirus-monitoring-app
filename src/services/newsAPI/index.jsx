import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'http://newsapi.org/v2/top-headlines',
});
const key = '27c471b3433042e4ae9014757912bfb4';

const newsAPI = {
    getNews: async (searchWord = 'covid', currentPage, country) => {
        const response = await instance.get(`?q=${searchWord}&apiKey=${key}${country ? "&country=" + country : ""}&page=${currentPage}`);
        console.log(response);
        return response.data;
    }
};

export default newsAPI;
