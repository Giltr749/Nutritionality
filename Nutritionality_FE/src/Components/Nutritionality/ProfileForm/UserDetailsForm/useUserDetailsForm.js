import * as userService from "../../../../Services/userService";
import * as constants from "../../../../Utils/Constants/constants";
import { useState, useEffect } from "react";
import { useAuth } from "../../../../Hooks/useAuth";

export function useUserDetailsForm() {
    const { activeUser, updateActiveUser } = useAuth();
    const [email, setEmail] = useState(activeUser.email);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(constants.UPDATE_FAILED_ERROR);
    const [isSuccessfulUpdate, setIsSuccessfulUpdate] = useState(false);

    const emailChangeHandler = (input) => {
        setEmail(input);
    };

    const updateUserDetailsHandler = async (event) => {
        try {
            event.preventDefault();
            setIsLoading(true);
            const updatedUser = await userService.updateUserDetails(activeUser.userId, { email });
            updateActiveUser(updatedUser);
            setIsLoading(false);
            setIsSuccessfulUpdate(true);
            setTimeout(() => setIsSuccessfulUpdate(false), 5000);
        } catch (err) {
            setErrorMessage(err);
            setIsLoading(false);
            setIsError(true);
            setTimeout(() => setIsError(false), 5000);
        }
    };

    useEffect(() => {
        resetUserDetailsFormValues();
    }, [activeUser]);

    const resetUserDetailsFormValues = () => {
        setEmail(activeUser.email);
    };

    return {
        email,
        isLoading,
        isError,
        errorMessage,
        isSuccessfulUpdate,
        emailChangeHandler,
        updateUserDetailsHandler
    };
}