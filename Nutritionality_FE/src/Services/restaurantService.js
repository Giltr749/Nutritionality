import * as DishFormData from '../Components/Nutritionality/DishForm/DishFormData';
import { API, RESTAURANT_ROUTE } from '../Utils/Constants/constants';

export async function addDish(newDish) {
    try {
        const response = await API.post(`${RESTAURANT_ROUTE}`, DishFormData.getAddDishFormData(newDish));
        const newlyAddedDish = response.data;
        return response.status;
    } catch (err) {
        throw err.response.data.message;
    }
}

export async function updateDish(dishId, updatedDish) {
    try {
        const dataToSend = updatedDish.image ? DishFormData.getUpdateDishFormData(updatedDish) : updatedDish;
        const response = await API.put(`${RESTAURANT_ROUTE}/${dishId}`, dataToSend);
        const newlyUpdatedDish = response.data;
        return response.status;
    } catch (err) {
        throw err.response.data.message;
    }
}

export async function getDishes() {
    try {
        const response = await API.get(`${RESTAURANT_ROUTE}`);
        return response.data;
    } catch (err) {
        throw err.response.data.message;
    }
}

export async function getDishById(requestedDishId) {
    try {
        const response = await API.get(`${RESTAURANT_ROUTE}/${requestedDishId}`);
        return response.data;
    } catch (err) {
        throw err.response.data.message;
    }
}

export async function getRestaurantsBySearchCriteria(restaurantSearchCriteria) {
    try {
        const response = await API.get(`${RESTAURANT_ROUTE}/search/criteria`, { params: { restaurantSearchCriteria } });
        return response.data;
    } catch (err) {
        throw err.response.data.message;
    }
}