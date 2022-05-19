import * as constants from '../../../Utils/Constants/constants';
import * as authService from '../../../Services/authService';
import { useState, useEffect } from 'react';
import { useAuth } from '../../../Hooks/useAuth';
import { useNavigate } from "react-router-dom";

export function useLogInForm({ onAuthMethodChange }) {
    const { updateActiveUser } = useAuth();
    const navigator = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [renderSuccessfulSignUpMessage, setRenderSuccessfulSignUpMessage] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setRenderSuccessfulSignUpMessage(false);
        }, 5000);
    }, []);

    const emailChangeHandler = (input) => {
        setEmail(input);
    };

    const passwordChangeHandler = (input) => {
        setPassword(input);
    };

    const getButtonStyles = () => {
        return isFormFilled() ? constants.ENABLED_BUTTON_STYLE : constants.DISABLED_BUTTON_STYLE;
    };

    const getButtonStatus = () => {
        return !isFormFilled();
    };

    const isFormFilled = () => {
        return email && password;
    };

    const logInHandler = async (event) => {
        try {
            event.preventDefault();
            if (email.length > 45) {
                throw constants.FIELD_LENGTH_ERROR_MESSAGE;
            }
            const loggedInUser = await authService.logIn({ email, password });
            updateActiveUser(loggedInUser);
            onAuthMethodChange(null);
            resetFormValues();
            navigator(constants.PROFILE);
        } catch (err) {
            setErrorMessage(err);
            setIsLoading(false);
            setIsError(true);
            setTimeout(() => setIsError(false), 5000);
        }
    };

    const resetFormValues = () => {
        setEmail('');
        setPassword('');
    };

    return {
        email,
        password,
        isLoading,
        isError,
        errorMessage,
        renderSuccessfulSignUpMessage,
        emailChangeHandler,
        passwordChangeHandler,
        logInHandler,
        getButtonStyles,
        getButtonStatus
    };
}