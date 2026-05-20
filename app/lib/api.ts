import axios from 'axios';

export const api = axios.create({
    baseURL: process.env.API_URL || 'http://localhost:8080/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use((config) => {

    //TO-DO: adicionar logica de validação de token

    return config;
})