import * as constants from '../../../Utils/Constants/constants';
import * as authService from '../../../Services/authService';
import { useState } from 'react';

export function useSignUpForm({ onAuthMethodChange, onSuccessfulSignUp }) {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const userNameChangeHandler = (input) => {
        setUserName(input);
    };

    const emailChangeHandler = (input) => {
        setEmail(input);
    };

    const passwordChangeHandler = (input) => {
        setPassword(input);
    };

    const confirmPasswordChangeHandler = (input) => {
        setConfirmPassword(input);
    };

    const getButtonStyles = () => {
        return isFormFilled() ? constants.ENABLED_BUTTON_STYLE : constants.DISABLED_BUTTON_STYLE;
    };

    const getButtonStatus = () => {
        return !isFormFilled();
    };

    const isFormFilled = () => {
        return userName && email && password && confirmPassword;
    };

    const signUpHandler = async (event) => {
        try {
            event.preventDefault();
            setIsLoading(true);
            if (userName.length > 45 || email.length > 45) {
                throw constants.FIELD_LENGTH_ERROR_MESSAGE;
            } else if (password !== confirmPassword) {
                throw constants.PASSWORD_MATCH_ERROR_MESSAGE;
            }
            const signedUpUser = await authService.signUp({
                userName,
                email,
                password,
                confirmPassword
            });
            signedUpUser && onAuthMethodChange(constants.LOG_IN_WORDING);
            onSuccessfulSignUp(constants.STATUS_OK);
            resetSignUpFormValues();
            setIsLoading(false);
        } catch (err) {
            setErrorMessage(err);
            setIsLoading(false);
            setIsError(true);
            setTimeout(() => setIsError(false), 5000);
        }
    };

    const resetSignUpFormValues = () => {
        setUserName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

    return {
        userName,
        email,
        password,
        confirmPassword,
        isLoading,
        isError,
        errorMessage,
        userNameChangeHandler,
        emailChangeHandler,
        passwordChangeHandler,
        confirmPasswordChangeHandler,
        signUpHandler,
        getButtonStyles,
        getButtonStatus
    };
}