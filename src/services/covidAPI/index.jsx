import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.covid19api.com',
});

const CovidAPI = {
    getGlobalStatistics: async () => {
        const response = await instance.get('/summary');
        console.log(response);
        return response.data.Global;
    },
    getCountryStatistics: async () => {
        const response = await instance.get('/summary');
        console.log(response);
        return response.data.Countries;
    }
};

export default CovidAPI;
