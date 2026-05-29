import axios from 'axios';

export const api = axios.create({
    baseURL: process.env.API_URL || 'http://localhost:8080/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use( async (config) => {

    if (typeof window === 'undefined') {
        try {
            const { cookies } = await import('next/headers');
            const cookieStore = await cookies();
            const token = cookieStore.get('auth_token')?.value;

            if (token && config.headers) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        } catch (error) {
            console.error('Erro ao obter cookies:', error);
        }
    }
    return config;
})