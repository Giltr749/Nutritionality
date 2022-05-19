import * as constants from "../../../Utils/Constants/constants";
import * as restaurantService from '../../../Services/restaurantService';
import { useState, useRef } from "react";

export function useDishForm({ dish, formActionType, onChangeDishInfo }) {
    const [name, setName] = useState(dish.name);
    const [protein, setProtein] = useState(dish.protein.toString());
    const [carbohydrates, setCarbohydrates] = useState(dish.carbohydrates);
    const [sodium, setSodium] = useState(dish.sodium);
    const [cholesterol, setCholesterol] = useState(dish.cholesterol);
    const [totalFat, setTotalFat] = useState(dish.totalFat);
    const [calories, setCalories] = useState(dish.calories);
    const [imageUpload, setImageUpload] = useState(dish.image);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isSuccessfulUpdate, setIsSuccessfulUpdate] = useState(false);
    const imageUploadRef = useRef(null);

    const nameChangeHandler = (input) => {
        setName(input);
    };

    const proteinChangeHandler = (input) => {
        setProtein(input);
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

    const imageUploadChangeHandler = (event) => {
        setImageUpload(URL.createObjectURL(event.target.files[0]));
    };

    const getSubmitButtonWording = () => {
        return formActionType === constants.ADD_DISH_WORDING ? constants.ADD_DISH_WORDING : constants.UPDATE_DISH_WORDING;
    };

    const addOrEditDishHandler = async (event) => {
        try {
            event.preventDefault();
            setIsLoading(true);
            if (name === null || protein === null || carbohydrates === null || sodium === null ||
                cholesterol === null || totalFat === null || calories === null || imageUpload === null) {
                throw constants.DATA_VALIDATION_ERROR;
            }
            const newOrUpdatedDish = {
                name,
                protein,
                carbohydrates,
                sodium,
                cholesterol,
                totalFat,
                calories,
                image: imageUploadRef.current?.files?.[0]
            };
            if (formActionType === constants.ADD_DISH_WORDING) {
                const addDishConfirmation = await restaurantService.addDish(newOrUpdatedDish);
                addDishConfirmation === constants.STATUS_OK && handleSuccessfulSubmission();
            } else if (formActionType === constants.UPDATE_DISH_WORDING) {
                newOrUpdatedDish.dishId = dish.dishId;
                newOrUpdatedDish.userId = dish.userId;
                const updateDishConfirmation = await restaurantService.updateDish(dish.dishId, newOrUpdatedDish);
                updateDishConfirmation === constants.STATUS_OK && handleSuccessfulSubmission();
            }
        } catch (err) {
            setErrorMessage(err);
            setIsLoading(false);
            setIsError(true);
            setTimeout(() => setIsError(false), 5000);
        }
    };

    const handleSuccessfulSubmission = () => {
        onChangeDishInfo && onChangeDishInfo();
        setIsLoading(false);
        setIsSuccessfulUpdate(true);
        formActionType === constants.ADD_DISH_WORDING && resetDishFormValues();
        setTimeout(() => setIsSuccessfulUpdate(false), 5000);
    };

    const resetDishFormValues = () => {
        if (imageUploadRef && imageUploadRef.current) {
            imageUploadRef.current.value = '';
        }
        setName(0);
        setProtein(0);
        setCarbohydrates(0);
        setSodium(0);
        setCholesterol(0);
        setTotalFat(0);
        setCalories(0);
        setImageUpload(0);
    };

    return {
        name,
        protein,
        carbohydrates,
        sodium,
        cholesterol,
        totalFat,
        calories,
        imageUpload,
        imageUploadRef,
        isError,
        isLoading,
        errorMessage,
        isSuccessfulUpdate,
        nameChangeHandler,
        proteinChangeHandler,
        carbohydratesChangeHandler,
        sodiumChangeHandler,
        cholesterolChangeHandler,
        totalFatChangeHandler,
        caloriesChangeHandler,
        addOrEditDishHandler,
        imageUploadChangeHandler,
        getSubmitButtonWording
    };
}