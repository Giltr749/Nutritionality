import * as restaurantService from '../../../Services/restaurantService';
import * as constants from '../../../Utils/Constants/constants';
import { useDebounce } from '../../../Hooks/useDebounce';
import { useState, useEffect } from 'react';

export function useSearchForm({ onSearchRestaurants, onError }) {
    const [protein, setProtein] = useState(0);
    const [carbohydrates, setCarbohydrates] = useState(0);
    const [sodium, setSodium] = useState(0);
    const [cholesterol, setCholesterol] = useState(0);
    const [totalFat, setTotalFat] = useState(0);
    const [calories, setCalories] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [radius, setRadius] = useState(2000);
    const [didMount, setDidMount] = useState(false);
    const [restaurantSearchParams, setRestaurantSearchParams] = useState({});
    const debouncedRestaurantSearchParams = useDebounce(restaurantSearchParams, constants.DEBOUNCE_TIMER);

    const proteinChangeHandler = (input) => {
        setProtein(input);
    };

    const radiusChangeHandler = (input) => {
        setRadius(input);
    };

    const carbohydratesChangeHandler = (input) => {
        setCarbohydrates(input);
    };

    const sodiumChangeHandler = (input) => {
        setSodium(input);
    };

    const cholesterolChangeHandler = (input) => {
        setCholesterol(input);
    };

    const totalFatChangeHandler = (input) => {
        setTotalFat(input);
    };

    const caloriesChangeHandler = (input) => {
        setCalories(input);
    };

    useEffect(() => {
        if (!didMount) {
            setDidMount(true);
            return;
        }
        didMount && sendAndSearch(debouncedRestaurantSearchParams);
    }, [debouncedRestaurantSearchParams]);

    const sendAndSearch = async (debouncedRestaurantSearchParams) => {
        try {
            const restaurantSearchResults = await restaurantService.getRestaurantsBySearchCriteria(debouncedRestaurantSearchParams);
            onSearchRestaurants(restaurantSearchResults);
            setIsLoading(false);
        } catch (err) {
            onError(err.message);
            setIsLoading(false);
        }
    };

    const getCurrentLocation = async()=>{
        return new Promise((resolve, reject)=>{
        navigator.geolocation.getCurrentPosition(
          position=>resolve(position),
          error=>reject(error)
        )
        });
    }

    const searchRestaurantsHandler = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        const position = await getCurrentLocation();
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setRestaurantSearchParams({
            nf_protein: protein,
            nf_total_carbohydrate: carbohydrates,
            nf_sodium: sodium,
            nf_cholesterol: cholesterol,
            nf_total_fat: totalFat,
            nf_calories: calories,
            Latitude: latitude,
            Longitude: longitude,
            Radius: radius
        });
        resetSearchFormValues();
    };

    const resetSearchFormValues = () => {
        setProtein(0);
        setCarbohydrates(0);
        setSodium(0);
        setCholesterol(0);
        setTotalFat(0);
        setCalories(0);
    };

    return {
        radius,
        protein,
        carbohydrates,
        sodium,
        cholesterol,
        totalFat,
        calories,
        isError,
        isLoading,
        errorMessage,
        radiusChangeHandler,
        proteinChangeHandler,
        carbohydratesChangeHandler,
        sodiumChangeHandler,
        cholesterolChangeHandler,
        totalFatChangeHandler,
        caloriesChangeHandler,
        searchRestaurantsHandler
    };
}