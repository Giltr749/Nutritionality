import * as constants from '../../../../Utils/Constants/constants';
import GeneralButton from '../../../General/Buttons/GeneralButton/GeneralButton.jsx';
import Row from '../../../General/Flexboxes/Row/Row';
import Col from '../../../General/Flexboxes/Column/Col';
import NutritionalityTitle from '../../../General/Title/NutritionalityTitle';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { useUserDetailsForm } from './useUserDetailsForm';
import '../../../../Styles/general.css';
import './UserDetailsForm.css';

function UserDetailsForm() {
    const {
        email,
        isLoading,
        isError,
        errorMessage,
        isSuccessfulUpdate,
        emailChangeHandler,
        updateUserDetailsHandler
    } = useUserDetailsForm();

    return (
        <Col styles='update-user-details-form-container'>
            <form className="update-user-details-form flex-col" onSubmit={updateUserDetailsHandler}>
                <Row styles='email-phone-number-fields-wrapper'>
                    <Col styles='email-phone-number-fields-container'>
                        <Row styles='title-container'>
                            <NutritionalityTitle
                                styles={constants.NUTRITIONALITY_TITLE_STYLES}
                                wording={`${constants.PERSONAL_DETAILS_WORDING} 🧍`}
                            />
                        </Row>
                        <fieldset className="sign-up-fieldset"><legend>{constants.EMAIL_WORDING}</legend><input
                            type="email"
                            className="sign-up-input"
                            value={email}
                            maxLength={45}
                            placeholder={constants.EMAIL_WORDING}
                            onChange={(event) => emailChangeHandler(event.target.value)}
                        /></fieldset>
                    </Col>
                </Row>
                <Row styles='update-contact-form-button-wrapper'>
                    <GeneralButton
                        wording={constants.UPDATE_USER_DETAILS_WORDING}
                        isDisabled={false}
                    />
                </Row>
                <Row styles="user-details-form-conditional-messaging-container">
                    <>
                        {isLoading &&
                            < Stack sx={{ color: 'silver' }} spacing={2} direction="row">
                                <CircularProgress color="inherit" />
                            </Stack>}
                        {isSuccessfulUpdate &&
                            < Alert severity="success">
                                {constants.UPDATE_SUCCESS_MESSAGE}
                            </Alert>}
                        {isError &&
                            < Alert severity="error">
                                {errorMessage}
                            </Alert>}
                    </>
                </Row>
            </form>
        </Col >
    );
}

export default UserDetailsForm;