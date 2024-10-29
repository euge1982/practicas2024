//frontend/src/services/api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000', // URL de tu backend
});

// Función de login
export const loginUser = async (email, password) => {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
};

// Función de registro
export const registerUser = async (userData) => {
    const response = await api.post('/auth/register', userData);
    return response.data;
};
