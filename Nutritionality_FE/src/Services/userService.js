import { API, USER_ROUTE } from '../Utils/Constants/constants';

export async function getUserById(requestedUserId) {
    try {
        const response = await API.get(`${USER_ROUTE}/${requestedUserId}`);
        return response.data;
    } catch (err) {
        throw err.response.data.message;
    }
}

export async function updateUserDetails(userId, updatedUser) {
    try {
        const response = await API.put(`${USER_ROUTE}/${userId}/userDetails`, updatedUser);
        return response.data;
    } catch (err) {
        throw err.response.data.message;
    }
}

export async function updateUserPassword(userId, updatedUser) {
    try {
        const response = await API.put(`${USER_ROUTE}/${userId}/password`, updatedUser);
        return response.status;
    } catch (err) {
        throw err.response.data.message;
    }
}