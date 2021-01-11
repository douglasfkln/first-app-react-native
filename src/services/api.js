import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://sujeitoprogramador.com/',
    baseURL: 'https://free.currencyconverterapi.com/api/v5'
});

export default api;