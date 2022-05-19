import * as constants from '../../../Utils/Constants/constants';
import { useAuth } from '../../../Hooks/useAuth';
import { useState } from 'react';

export function useNavBarContents() {
    const { activeUser, logOutActiveUser } = useAuth();
    const [formInModal, setFormInModal] = useState(null);
    const [successfulSignUpMessage, setSuccessfulSignUpMessage] = useState(null);

    const getUserGreeting = () => {
        return activeUser.name ? `Hello ${activeUser.name}!` : '';
    };

    const closeModalHandler = () => {
        setFormInModal(null);
    };

    const successfulSignUpHandler = (signedUpConfirmation) => {
        signedUpConfirmation === constants.STATUS_OK && setSuccessfulSignUpMessage(constants.SUCCESSFUL_SIGN_UP_MESSAGE);
    };

    const authClickHandler = (authMethod) => {
        if (authMethod) {
            authMethod = authMethod.toLowerCase();
            authMethod === constants.SIGN_UP && setFormInModal(constants.SIGN_UP);
            authMethod === constants.LOG_IN && setFormInModal(constants.LOG_IN);
        } else {
            closeModalHandler();
        }
    };

    const restaurantClickHandler = (restaurantTask) => {
        restaurantTask = restaurantTask.toLowerCase();
        restaurantTask === constants.ADD_DISH && setFormInModal(constants.ADD_DISH);
    };

    const settingsClickHandler = (settingChoice) => {
        settingChoice = settingChoice.toLowerCase();
        settingChoice === constants.LOG_OUT && logOutActiveUser();
    };

    return {
        activeUser,
        formInModal,
        successfulSignUpMessage,
        closeModalHandler,
        getUserGreeting,
        successfulSignUpHandler,
        authClickHandler,
        restaurantClickHandler,
        settingsClickHandler
    };
}