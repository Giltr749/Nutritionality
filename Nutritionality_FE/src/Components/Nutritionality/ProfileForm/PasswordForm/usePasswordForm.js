import * as userService from "../../../../Services/userService";
import { useState } from "react";
import { useAuth } from "../../../../Hooks/useAuth";
import { PASSWORD_MATCH_ERROR_MESSAGE, STATUS_OK, UPDATE_FAILED_ERROR } from "../../../../Utils/Constants/constants";

export function usePasswordForm() {
    const { activeUser } = useAuth();
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(UPDATE_FAILED_ERROR);
    const [isSuccessfulUpdate, setIsSuccessfulUpdate] = useState(false);

    const oldPasswordChangeHandler = (input) => {
        setOldPassword(input);
    };

    const newPasswordChangeHandler = (input) => {
        setNewPassword(input);
    };

    const confirmNewPasswordChangeHandler = (input) => {
        setConfirmNewPassword(input);
    };

    const updatePasswordHandler = async (event) => {
        try {
            event.preventDefault();
            setIsLoading(true);
            if (newPassword !== confirmNewPassword) {
                throw PASSWORD_MATCH_ERROR_MESSAGE;
            }
            const updatePasswordConfirmation = await userService.updateUserPassword(activeUser.userId, {
                oldPassword,
                newPassword,
                confirmNewPassword,
            });
            if (updatePasswordConfirmation === STATUS_OK) {
                resetPasswordFormValues();
                setIsLoading(false);
                setIsSuccessfulUpdate(true);
                setTimeout(() => setIsSuccessfulUpdate(false), 5000);
            }
        } catch (err) {
            setErrorMessage(err);
            resetPasswordFormValues();
            setIsLoading(false);
            setIsError(true);
            setTimeout(() => setIsError(false), 5000);
        }
    };

    const resetPasswordFormValues = () => {
        setOldPassword('');
        setNewPassword('');
        setConfirmNewPassword('');
    };

    return {
        oldPassword,
        newPassword,
        confirmNewPassword,
        isLoading,
        isError,
        errorMessage,
        isSuccessfulUpdate,
        oldPasswordChangeHandler,
        newPasswordChangeHandler,
        confirmNewPasswordChangeHandler,
        updatePasswordHandler
    };
}