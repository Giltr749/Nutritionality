import * as constants from '../../../Utils/Constants/constants';
import NavBar from './NavBar/NavBar';
import AuthBar from './AuthBar/AuthBar';
import Row from '../../General/Flexboxes/Row/Row';
import { MdFoodBank } from "react-icons/md";
import MUIModal from '../../General/Modals/MUIModal';
import SignUpForm from '../SignUpForm/SignUpForm';
import LogInForm from '../LogInForm/LogInForm';
import SettingsBar from './SettingsBar/SettingsBar';
import RestaurantBar from './RestaurantBar/RestaurantBar';
import { SIGN_UP_WORDING } from '../../../Utils/Constants/constants';
import DishForm from '../DishForm/DishForm';
import { useNavBarContents } from './useNavBarContents';
import './NavBarContents.css';

function NavBarContents() {
    const {
        activeUser,
        formInModal,
        successfulSignUpMessage,
        closeModalHandler,
        getUserGreeting,
        successfulSignUpHandler,
        authClickHandler,
        restaurantClickHandler,
        settingsClickHandler
    } = useNavBarContents();

    return (
        <Row styles='navbar-wrapper'>
            <NavBar
                styles={constants.NAV_BAR_TAB_STYLES}
                names={constants.NAV_BAR_TAB_NAMES}
            />
            <Row styles='icon-container'>
                <MdFoodBank className="company-icon"></MdFoodBank>
            </Row>
            {activeUser.restaurantId ?
                <>
                    <RestaurantBar
                        styles={constants.NAV_BAR_TAB_STYLES}
                        names={constants.ADMIN_BAR_NAMES}
                        onAction={restaurantClickHandler}
                    />
                    <SettingsBar
                        styles={constants.NAV_BAR_TAB_STYLES}
                        names={constants.SETTINGS_BAR_NAMES}
                        greetingStyles={constants.USER_GREETING_STYLES}
                        greeting={getUserGreeting()}
                        onAction={settingsClickHandler}
                    />
                </>
                :
                activeUser.userId ?
                    <SettingsBar
                        styles={constants.NAV_BAR_TAB_STYLES}
                        names={constants.SETTINGS_BAR_NAMES}
                        greetingStyles={constants.USER_GREETING_STYLES}
                        greeting={getUserGreeting()}
                        onAction={settingsClickHandler}
                    />
                    :
                    <AuthBar
                        styles={constants.NAV_BAR_TAB_STYLES}
                        names={constants.AUTH_BAR_NAMES}
                        onAction={authClickHandler}
                    />}
            <MUIModal
                content={formInModal === constants.SIGN_UP ?
                    <Row styles='sign-up-form-wrapper'>
                        <SignUpForm
                            formTitle={SIGN_UP_WORDING}
                            submitButtonWording={SIGN_UP_WORDING}
                            wordingContainer={true}
                            onSuccessfulSignUp={successfulSignUpHandler}
                            onAuthMethodChange={authClickHandler}
                        />
                    </Row>
                    :
                    formInModal === constants.LOG_IN ?
                        <LogInForm
                            successfulSignUpMessage={successfulSignUpMessage}
                            onAuthMethodChange={authClickHandler}
                        />
                        :
                        formInModal === constants.ADD_DISH ?
                            <DishForm
                                formActionType={constants.ADD_DISH_WORDING}
                            />
                            :
                            null}
                onClose={closeModalHandler}
            />
        </Row>
    );
}

export default NavBarContents;