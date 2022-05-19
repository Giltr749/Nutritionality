import { API, AUTH_ROUTE } from '../Utils/Constants/constants';

export async function signUp(newUser) {
    try {
        const response = await API.post(`${AUTH_ROUTE}/signup`, newUser);
        return response.data;
    } catch (err) {
        throw err.response.data.message;
    }
}

export async function logIn(existingUser) {
    try {
        const response = await API.post(`${AUTH_ROUTE}/login`, existingUser);
        return response.data;
    } catch (err) {
        throw err.response.data.message;
    }
}

export async function logOut() {
    try {
        const response = await API.post(`${AUTH_ROUTE}/logout`);
        return response.status;
    } catch (err) {
        alert(err);
    }
}