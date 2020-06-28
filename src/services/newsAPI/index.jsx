import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'http://newsapi.org/v2/top-headlines',
});
const key = '27c471b3433042e4ae9014757912bfb4';
const country = 'ru';

const newsAPI = {

    getNews: async (searchWord = 'covid') => {
        const response = await instance.get(`?q=${searchWord}&apiKey=${key}&country=${country}`);
        console.log(response);
        return response.data.articles;

    }

};
export default newsAPI;
